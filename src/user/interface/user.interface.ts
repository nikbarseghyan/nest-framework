import { Document } from 'mongoose';
import { IAddress } from './address.interface';

export interface IUser extends Document {
  readonly email: string;
  readonly avatar: string;
  readonly avatarId: string;
  readonly fName: string;
  readonly lName: string;
  readonly gender: string;
  readonly address: IAddress;
  readonly profession: string;
  readonly phone: string;
  readonly roles: Array<string>;
  readonly password: string;
}
