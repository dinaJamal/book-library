import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import db from "./models";
import { authors } from "./seeders/Authors";

const createAuthors = () => {
  authors.map((author) => {
    db.Author.create(author);
  });
};
createAuthors();
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
