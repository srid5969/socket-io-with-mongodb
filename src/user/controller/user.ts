import { Request, Response, Express } from "express";
let router: Express = require("express").Router();
import { container } from "../../common/iocContainer/iocCongig";
import { UserService } from "../service/user";

router.post("/register", async (req: Request | any, res: Response) => {
  container
    .resolve(UserService)
    .register(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err).status(404);
    });
});
router.get("/", (req: Request, res: Response) => {
  console.log("Get Api got Hitted");
  res.send({ message: "Get Api got Hitted" });
});
export default router;
