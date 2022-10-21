import { Router, Request, Response } from "express";
import db from "../models";
import { bookSchema } from "../validation/bookValidation";
import validate from "../validation/validationMiddleware";

const router = Router();

router.get("/", (req, res) => {
  const limit = req.query.limit;
  const offset = req.query.offset;
  db.Book.findAll({ limit, offset })
    .then((result: object) => res.json(result))
    .catch((err: object) => console.error(err));
});

router.post("/", async (req, res) => {
  const validationResult = await validate({
    schema: bookSchema,
    data: req.body,
  });
  if (!validationResult.isValid) {
    return res.status(400).json({ error: validationResult.error });
  }
  db.Book.create({ title: req.body.title });
  return res.status(200).json({ message: "success" });
});

export default router;
