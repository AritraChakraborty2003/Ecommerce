import express from "express";
import mongoose from "mongoose";
const app = express();
const ecomBookSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { collection: "Books" }
);
mongoose.connect("mongodb://localhost:27017/ecom");
const books = mongoose.model("Books", ecomBookSchema);
app.get("/booksAPI", (req, res) => {
  books
    .find()
    .then((apikey) => {
      res.json(apikey);
    })
    .catch((err) => console.log(err));
});
app.post("/booksAPI", (req, res) => {});
app.listen("8000", () => {
  console.log("");
});
