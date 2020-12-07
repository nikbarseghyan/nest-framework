import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './interface/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {
    console.log(this.userModel);
  }

  async create(
    createUserDto: CreateUserDto,
    roles: Array<string>,
  ): Promise<IUser> {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(createUserDto.password, salt);

    const createUser = new this.userModel(
      _.assignIn(createUserDto, { password: hash, roles }),
    );

    return await createUser.save();
  }

  async find(id: string): Promise<IUser> {
    return await await this.userModel.findById(id).exec();
  }
}
