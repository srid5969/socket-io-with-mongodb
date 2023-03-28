import { Server, Socket } from "socket.io";
import { injectable } from "tsyringe";
import user, { IUser } from "../model/user";
import { UserRepository } from '../repository/userRepository';



@injectable()
export class UserService {
  constructor(private userRepository:UserRepository ){}
 public async register(data: IUser) {
    const Data = new user(data);
    const savedData = await Data.save();
    return savedData;
  }
  public async changesInUserDocument(io: Server, socket: Socket){
    this.userRepository.changesInUserDocument(io, socket);
  }
}

