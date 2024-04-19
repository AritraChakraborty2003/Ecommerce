import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
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
app.post("/booksAPI", upload.single("file"), (req, res) => {
  let name = req.body.name;
  let price = req.body.price;
  let filename = req.body.filename;
  console.log(name, price, filename);
});
app.listen("8000", () => {
  console.log("");
});
