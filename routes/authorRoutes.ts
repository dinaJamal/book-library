import { Router, Request, Response } from "express";
import db from "../models";

const router = Router();

router.get("/", (req, res) => {
  const limit = req.query.limit;
  const offset = req.query.offset;
  const allQueries = req.query;
  db.Author.findAll({ offset: offset, limit: limit })
    .then((result: object) => res.json(result))
    .catch((err: object) => console.error(err));
});

router.post("/", (req, res) => {
  res.json({ message: "done" });
  //1- validate inputs(express-validator)
  //2- if there is validation error return 400(bad request)
  //3- if validation passed we create new model and return 200
});

router.put("/:id", (req, res) => {
  //1- validate inputs(express-validator)
  //2- if there is validation error return 400(bad request)
  //3- if validation passed we update the model and return 200
});

router.delete("/:id", (req, res) => {
  //1- validate inputs(express-validator)
  //2- if there is validation error return 400(bad request)
  //3- if validation passed we update the model and return 200
});
export default router;
