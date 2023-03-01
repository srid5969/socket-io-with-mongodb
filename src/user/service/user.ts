import user, { IUser } from "../model/user";
import { autoInjectable, inject, injectable } from 'tsyringe';
import {UserRepository} from "../repository/userRepository";


// @Injectable()
export class UserService {
  constructor( @inject('UserRepository')
  private repository: KeymapRepositoryprivate readonly userRepository: UserRepository) {}
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
