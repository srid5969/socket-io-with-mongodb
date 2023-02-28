import { Request, Response, Express } from "express";
import { register } from "../service/user";
let router: Express = require("express").Router();

router.post("/register", async (req: Request | any, res: Response) => {
  register(req.body)
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
