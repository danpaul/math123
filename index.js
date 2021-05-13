/**
 * About: Bookbase is a web service and API that allows users to store
 *  information about books they have in their colleciton.
 *
 * The Bookbase server uses Node and the Express framework.
 */

/**
 * Require necessary node modules
 */
const express = require("express");

/**
 * Setup our book "database" (this would nornally be persisted in a real
 *  database)
 */
let currentId = 3;
let books = [
  { id: 1, title: "Jane Eyre", author: "Charlotte Bronte" },
  { id: 2, title: "Wuthering Heights", author: "Emily Brontë" },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "Scott Fitzgerald",
  },
];

/**
 * Intialize express framework and define the port we want our server to use
 */
const app = express();
const port = 3000;

/**
 * Setup middleware to define a public directory which we'll use to server our web client.
 *
 * We'll also add middleware to allow Express to handle JSON and url params.
 */
app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

/**
 * Define our CRUD api methods
 */

/**
 * CREATE a new book using POST method
 *
 * When received, this request will push a book into our data store.
 */
app.post("/api/book", async (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    res.status(400);
    return res.send({ status: "error", error: "Missing required data" });
  }
  currentId += 1;
  const book = { id: currentId, title, author };
  console.log("POST request received, adding book to data store: ", book);
  books.push(book);
  res.send({ status: "success" });
});

/**
 * READ data using GET http method
 *
 * Return all books in our database
 */
app.get("/api/books", async (req, res) => {
  console.log("GET request received, returning all books from our data store");
  res.send({ status: "success", data: { books } });
});

/**
 * UPDATE existing book using PUT http method
 */
app.put("/api/book/:id", async (req, res) => {
  const { id } = req.params;
  books = books.map((book) => {
    // if id does not match, make no changes
    if (book.id !== Number(id)) {
      return book;
    }
    console.log("PUT request received updating book", req.body);
    // if id does match, merge in updated params
    return { ...book, ...req.body };
  });
  res.send({ status: "success" });
});

/**
 * DELETE book using DELETE http method
 */
app.delete("/api/book/:id", async (req, res) => {
  const { id } = req.params;
  console.log(`DELETE request received, deleting book with id ${id}`);
  books = books.filter((book) => book.id !== Number(id));
  res.send({ status: "success" });
});

/**
 * Initialize the server
 */
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
