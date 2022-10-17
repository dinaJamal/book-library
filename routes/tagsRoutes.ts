import { Router, Request, Response } from "express";
import db from "../models";
import { body, validationResult } from "express-validator";

const router = Router();

router.get("/", (req, res) => {
  const limit = req.query.limit;
  const offset = req.query.offset;

  db.Tags.findAll({ offset, limit })
    .then((result: object) => res.json(result))
    .catch((err: object) => console.error(err));
});

export default router;
