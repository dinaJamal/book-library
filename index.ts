import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import db from "./models";
import { authors } from "./seeders/Authors";
import { books } from "./seeders/Books";
import { tags } from "./seeders/Tags";


// const createAuthors = () => {
//   authors.map((author) => {
//     db.Author.create(author);
//   });
// };
// createAuthors();

// const createBooks = () => {
//   books.map((book) => {
//     db.Book.create(book);
//   });
// };
// createBooks();

const createTags = () => {
  tags.map((tag) => {
    db.Tags.create(tag);
  });
};
createTags();

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
