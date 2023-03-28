"use strict";
import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import reflectMetadata from "reflect-metadata";
import morgan from "morgan";
import { Server, Socket } from "socket.io";

import db from "./common/manager/config";
import user from "./user/Router/user.router";
import { container } from "./common/iocConfig/config";

const port: number = 8000;
mongoose.connect(db);
/**
 * connecting  mongodb
 */
const database = mongoose.connection;
database.on("error", (error) => console.error());
database.once("connected", () => console.log("Database Connected"));

const app: Application = express();
/**
 * Added cors to resolve cors  @errors
 * @default 'GET,HEAD,PUT,PATCH,POST,DELETE'
 */
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
/**
 * Returns middleware that only parses json and only looks at requests
 * where the Content-Type header matches the type option.
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
/**
 * Used OAuth 2.1 for authentication
 */
app.use(morgan('combined'));

app.use(user);
/**
 * listing to the  @port 8000
 */
const server=app.listen(port, () => {
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
  // changesInUserDocument(io, socket);
};
io.on("connection", onConnection);