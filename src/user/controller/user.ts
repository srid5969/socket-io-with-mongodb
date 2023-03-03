import { Request, Response, Express } from "express";
import { UserService } from "../service/user";
import { autoInjectable, injectable } from "tsyringe";
// import { register } from "../service/user";
let router: Express = require("express").Router();
@autoInjectable()
class UserController {
  constructor(private readonly userService: UserService) {}
  async getAllUsers(_req: Request, res: Response) {
    const result = await this.userService.findAll();
    return res.json(result);
  }
}

export default UserController;
