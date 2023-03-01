import user, { IUser } from "../model/user";
import { autoInjectable, delay, inject, injectable } from 'tsyringe';
import {UserRepository} from "../repository/userRepository";


// @Injectable()
export class UserService {
  constructor((@inject(delay(() => UserRepository))
  private repository: UserRepository) {}
  async register(data: IUser) {
    const Data = new user(data);
    const savedData = await Data.save();
    return savedData;
  }
}
export async function register(data: IUser) {
  const Data = new user(data);
  const savedData = await Data.save();
  return savedData;
}
