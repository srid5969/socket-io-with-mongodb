import { Server, Socket } from "socket.io";
import User from "./../Model/user";
import { injectable } from "inversify";
@injectable()
export class UserHandler {
  async changesInUserDocument(_io: Server, socket: Socket) {
    User.watch().on("change", (data: any) => {
      if (data) {
        socket.emit("notification", data);
        socket.emit("demo", data);
      }
    });
  }
}
