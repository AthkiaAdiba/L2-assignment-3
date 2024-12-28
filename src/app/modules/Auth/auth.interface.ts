import { Model } from 'mongoose';
import { USER_ROLE } from './auth.constant';

export interface TUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  isBlocked: boolean;
}

export type TLoginUser = {
  email: string;
  password: string;
};

export interface UserModel extends Model<TUser> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(email: string): Promise<TUser>;
}

export type TUserRole = keyof typeof USER_ROLE;
