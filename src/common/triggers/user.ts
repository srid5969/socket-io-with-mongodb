import User from "../../user/model/user";
import { Server, Socket } from "socket.io";
export async function changesInUserDocument(io: Server, socket: Socket) {
  User.watch().on("change", (data) => {
    if (data) {
      socket.emit("notification", data);
      socket.emit("demo", data);
    }
  });
}
