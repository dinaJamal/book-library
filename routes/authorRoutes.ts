import { Router, Request, Response } from "express";
import db from "../models";
import { authorSchema } from "../validation/authorValidation";
import { bookSchema } from "../validation/bookValidation";
import validate from "../validation/validationMiddleware";

const router = Router();

router.get("/", async (req, res) => {
  const validationResult = await validate({
    schema: authorSchema,
    data: req.body,
  });
  if (!validationResult.isValid) {
    return { statusCode: 400, body: { error: validationResult.error } };
  }

  const limit = req.query.limit;
  const offset = req.query.offset;
  const allQueries = req.query;
  db.Author.findAll({ offset: offset, limit: limit })
    .then((result: object) => res.json(result))
    .catch((err: object) => console.error(err));
});

router.post("/", async (req, res) => {
  //1- validate inputs(express-validator)
  //2- if there is validation error return 400(bad request)
  //3- if validation passed we create new model and return 200
  const validationResult = await validate({
    schema: authorSchema,
    data: req.body,
  });
  if (!validationResult.isValid) {
    return res.status(400).json({ error: validationResult.error });
  }

  db.Author.create({ name: req.body.name });
  return res.status(200).json({ message: "succeed" });
});

router.put("/:id", async (req, res) => {
  //1- validate inputs(express-validator)
  //2- if there is validation error return 400(bad request)
  //3- if validation passed we update the model and return 200
  const validateResult = await validate({
    schema: bookSchema,
    data: req.body,
  });
  if (!validateResult.isValid) {
    return res.status(400).json({ error: validateResult.error });
  }
  const author = await db.Author.findOne({
    where: { id: req.params.id },
  });
  if (!author) {
    return res.status(404).json({ message: "not found" });
  }
  db.Author.update({ name: req.body.name }, { where: { id: req.params.id } });
  return res.status(200).json({ message: "succeed" });
});

router.delete("/:id", async (req, res) => {
  //1- validate inputs(express-validator)
  //2- if there is validation error return 400(bad request)
  //3- if validation passed we update the model and return 200
  const author = await db.Author.findOne({
    where: { id: req.params.id },
  });
  if (!author) {
    return res.status(404).json({ message: "not found" });
  }
  db.Author.destroy({ where: { id: req.params.id } });
  return res.status(200).json({ message: "succeed" });
});
export default router;
