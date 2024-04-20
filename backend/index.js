import mongoose from "mongoose";
import cors from "cors";
import axios from "axios";
import multer from "multer";
import express from "express";
import fs from "fs";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    var dir = "./uploads";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

const ecomBookSchema = new mongoose.Schema(
  {
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
    stock: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    descr: {
      type: String,
      required: true,
    },
  },
  { collection: "Books" }
);
mongoose.connect("mongodb://localhost:27017/ecom");
const books = mongoose.model("Books", ecomBookSchema);
app.get("/", (req, res) => {
  const data = {
    name: "Aritra",
    age: 21,
  };
  res.send(data);
});
app.get("/booksAPI", (req, res) => {
  books
    .find()
    .then((book) => {
      res.json(book);
    })
    .catch((err) => console.log(err));
});

app.post("/booksAPI", upload.single("file"), (req, res) => {
  let name = req.body.name;
  let author = req.body.author;
  let price = req.body.price;
  let stock = req.body.stock;
  let discount = req.body.discount;
  let category = req.body.category;
  let descr = req.body.description;
  let image = req.file.filename;
  let url = "http://127.0.0.1:8000/" + image;

  /* console.log(author);
  console.log(price);
  console.log(stock);
  console.log(discount);
  console.log(category);
  console.log(descr);
  console.log(image);
  console.log(url);*/

  let NewBook = new books({
    name: name,
    author: author,
    price: price,
    stock: stock,
    discount: discount,
    category: category,
    image: url,
    descr: descr,
  });

  NewBook.save();
});
app.listen(8000, () => {
  console.log("Backend Connected");
});
