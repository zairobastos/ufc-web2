import { Router, Request, Response } from "express";

const rota = Router();

rota.get("/", (req: Request, res: Response) => {
  res.render("index", {});
});

export default rota;
