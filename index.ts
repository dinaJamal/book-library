import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import db from "./models";
import { books } from "./seeders/Books";

const createBooks = () => {
  books.map((book) => {
    db.Book.create(book);
  });
};
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
