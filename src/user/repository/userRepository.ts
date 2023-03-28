import { injectable as Injectable } from "tsyringe";

import { Model } from "mongoose";
import User, { IUser } from "../model/user";
import { IUserRepository } from "./IUserRepository";
import { Server, Socket } from "socket.io";

@Injectable()
export class UserRepository implements IUserRepository {
  model: Model<IUser>;
  constructor() {
    this.model = User;
  }
  changesInUserDocument(io: Server, socket: Socket) {
    this.model.watch().on("change", (data) => {
      if (data) {
        socket.emit("notification", data);
        socket.emit("demo", data);
      }
    });
  }
}
