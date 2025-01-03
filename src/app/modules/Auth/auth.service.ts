import AppError from '../../errors/AppError';
import { TLoginUser, TUser } from './auth.interface';
import { User } from './auth.model';
import { StatusCodes } from 'http-status-codes';
import { createToken } from './auth.utils';
import config from '../../config';

const registerUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload);

  return result;
};

const loginUser = async (payload: TLoginUser) => {
  //   checking if the user is exists
  const user = await User.isUserExists(payload?.email);

  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This user is not found!');
  }

  if (payload.password !== user.password) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'Invalid credentials!');
  }

  if (!user._id) {
    throw new AppError(StatusCodes.NOT_FOUND, 'The user _id is not found!');
  }

  const idString = user._id.toString();
  // console.log(idString);

  //   checking if user is already delete
  const isBlocked = user?.isBlocked;

  if (isBlocked) {
    throw new AppError(StatusCodes.FORBIDDEN, 'This user is blocked!');
  }

  // create token and sent to the client
  const jwtPayload = {
    userId: idString,
    userEmail: user?.email,
    role: user?.role,
  };

  // console.log(jwtPayload);

  const token = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return {
    token,
  };
};

export const AuthServices = {
  registerUserIntoDB,
  loginUser,
};
