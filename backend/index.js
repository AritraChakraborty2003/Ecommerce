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

const ecomMerchSchema = new mongoose.Schema(
  {
    name: {
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
  { collection: "Merchs" }
);

const ecomReviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { collection: "reviews" }
);
const ecomGiftsSchema = new mongoose.Schema(
  {
    name: {
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
  { collection: "Gifts" }
);
const ecomReligiousSchema = new mongoose.Schema(
  {
    name: {
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
  { collection: "Religious" }
);
mongoose.connect("mongodb://localhost:27017/ecom");
const books = mongoose.model("Books", ecomBookSchema);
const merchs = mongoose.model("Merch", ecomMerchSchema);
const religious = mongoose.model("Religious", ecomReligiousSchema);
const gifts = mongoose.model("Gifts", ecomGiftsSchema);
const review = mongoose.model("reviews", ecomReviewSchema);
/* ---- GET Req Start ---- */
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

app.get("/merchsAPI", (req, res) => {
  merchs
    .find()
    .then((book) => {
      res.json(book);
    })
    .catch((err) => console.log(err));
});

app.get("/giftsAPI", (req, res) => {
  gifts
    .find()
    .then((book) => {
      res.json(book);
    })
    .catch((err) => console.log(err));
});

app.get("/religiousAPI", (req, res) => {
  religious
    .find()
    .then((book) => {
      res.json(book);
    })
    .catch((err) => console.log(err));
});

app.get("/reviewsAPI", (req, res) => {
  review
    .find()
    .then((book) => {
      res.json(book);
    })
    .catch((err) => console.log(err));
});
/*---- GET Request end ----*/

/* ---- POST Req Start ---- */
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

app.post("/merchsAPI", upload.single("file"), (req, res) => {
  let name = req.body.name;
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

  let NewMerch = new merchs({
    name: name,
    price: price,
    stock: stock,
    discount: discount,
    category: category,
    image: url,
    descr: descr,
  });

  NewMerch.save();
});

app.post("/religiousAPI", upload.single("file"), (req, res) => {
  let name = req.body.name;
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

  let NewReligious = new religious({
    name: name,
    price: price,
    stock: stock,
    discount: discount,
    category: category,
    image: url,
    descr: descr,
  });

  NewReligious.save();
});

app.post("/giftsAPI", upload.single("file"), (req, res) => {
  let name = req.body.name;
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

  let NewGifts = new gifts({
    name: name,
    price: price,
    stock: stock,
    discount: discount,
    category: category,
    image: url,
    descr: descr,
  });

  NewGifts.save();
});

app.post("/reviewsAPI", upload.single("file"), (req, res) => {
  let name = req.body.name;
  let type = req.body.category;
  let file1 = req.file.filename;
  let url = "http://127.0.0.1:8000/" + file1;

  let NewReview = new review({
    name: name,
    type: type,
    file: url,
  });

  NewReview.save();
});
app.listen(8000, () => {
  console.log("Backend Connected");
});
/*--- POST Request END ---*/
