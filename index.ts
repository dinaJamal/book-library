import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import db from "./models";
import { authors } from "./seeders/Authors";
import { books } from "./seeders/Books";

// const createAuthors = () => {
//   authors.map((author) => {
//     db.Author.create(author);
//   });
// };
// createAuthors();

const createBooks = () => {
  books.map((book) => {
    db.Book.create(book);
  });
};
createBooks();

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
