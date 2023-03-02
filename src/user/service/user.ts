import { autoInjectable as Service, inject } from "tsyringe";
import { IUser } from "../model/user";
import { UserRepository } from "../repository/userRepository";

@Service()
export class UserService {
  constructor(@inject("UserRepository") private readonly userRepository: UserRepository) {}

  async findAll(): Promise<Array<IUser>> {
    return this.userRepository.findAll();
  }
  async register(data: IUser): Promise<IUser> {
    return this.userRepository.save(data);
  }
}
