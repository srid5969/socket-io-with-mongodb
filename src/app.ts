import express, { Request, Response, Express } from "express";
import { Server, Socket } from "socket.io";
import user from "./user/controller/user";
import mongoose from "mongoose";
import db from "./common/manager.ts/config";
import { createServer } from "http";
import { demo, registerHandlers } from "./user/controller/socket";
import { changesInUserDocument } from "./common/triggers/user";
let port = 8080;
mongoose.connect(db);
const database = mongoose.connection;
const app: Express = express();
const httpServer = createServer(app);
app.use("/", user);

const server = httpServer.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});
const onConnection = (socket: Socket) => {
  changesInUserDocument(io, socket);
  registerHandlers(io, socket);
  demo(io, socket)
};
io.on("connection", onConnection);
