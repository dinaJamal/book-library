import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import db from "./models";
import { authors } from "./seeders/Authors";
import { books } from "./seeders/Books";
import { tags } from "./seeders/Tags";
import { bookTags } from "./seeders/BookTags";
import authorRoutes from './routes/authorRoutes'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use('/books', bookRoutes)
app.use('/authors', authorRoutes)
// app.use('/tags', tagsRoutes)

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

// const createTags = () => {
//   tags.map((tag) => {
//     db.Tags.create(tag);
//   });
// };
// createTags();

// const createBookTags = () => {
//   bookTags.map((bookTag) => {
//     db.Book_Tags.create(bookTag);
//   });
// };
// createBookTags();

app.get('/', (req, res) => {
  db.Book.findAll({
      include: {
          model: db.Tags
      }
  }).then((result: object) => res.json(result)).catch((err: object) => console.error(err));
})

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
