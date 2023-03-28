import { Server, Socket } from "socket.io";

export interface IUserRepository{
    changesInUserDocument(io: Server, socket: Socket):void;
}