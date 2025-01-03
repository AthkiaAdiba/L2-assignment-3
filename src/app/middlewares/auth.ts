import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/AppError';
import { StatusCodes } from 'http-status-codes';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { TUserRole } from '../modules/Auth/auth.interface';
import { User } from '../modules/Auth/auth.model';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const RowToken = req.headers.authorization;
    const token = RowToken?.split(' ')[1];

    // if the token is sent from the client
    if (!token) {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'You are not authorized!');
    }

    // check if the token is valid
    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload;

    // console.log(decoded);

    const { role, userEmail } = decoded;

    //   checking if the user is exists
    const user = await User.isUserExists(userEmail);
    // console.log(user);

    if (!user) {
      throw new AppError(StatusCodes.NOT_FOUND, 'This user is not found!');
    }

    //   checking if user is already delete
    const isBlocked = user?.isBlocked;

    if (isBlocked) {
      throw new AppError(StatusCodes.FORBIDDEN, 'This user is blocked!');
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'You are not authorized!');
    }

    // decoded undefined
    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
