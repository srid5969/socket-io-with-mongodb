import { autoInjectable as MongoRepository, inject } from "tsyringe";
import 'reflect-metadata';

import { Model } from "mongoose";
import User, { IUser } from "../model/user";
import { IUserRepository } from "./IUserRepository";

@MongoRepository()
export class UserRepository implements IUserRepository {
  constructor(@inject('Model') private userModel: Model<IUser>) {
    this.userModel = User;
  }
  public async findAll(): Promise<Array<IUser>> {
    return await this.userModel.find();
  }
  public async save(params: IUser): Promise<IUser> {
    const data = new this.userModel(params);
    return await data.save();
  }
}
