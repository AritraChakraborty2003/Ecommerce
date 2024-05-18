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
const searchDbSchema = new mongoose.Schema(
  {
    bname: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
    categorySupport: {
      type: String,
      required: true,
    },
    genre: {
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

    image: {
      type: String,
      required: true,
    },

    discount: {
      type: Number,
      required: true,
    },
    descr: {
      type: String,
      required: true,
    },
    authorFname: {
      type: String,
      required: true,
    },

    authorLname: {
      type: String,
      required: true,
    },
    brandFname: {
      type: String,
      required: true,
    },
    brandLname: {
      type: String,
      required: true,
    },
  },

  { collection: "search" }
);
const adminDbSchema = new mongoose.Schema(
  {
    uname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    descr: {
      type: String,
      required: true,
    },
  },
  { collection: "admindb" }
);
const ecomcategorySchema = new mongoose.Schema(
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
  { collection: "categorys" }
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
const ecomOrderSchema = new mongoose.Schema(
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
  { collection: "ecomorder" }
);
const ecomAdminSchema = new mongoose.Schema(
  {
    uname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: "admindb" }
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
const categorys = mongoose.model("categorys", ecomcategorySchema);
const generalOrder = mongoose.model("OrderGeneral", ecomOrderSchema);
const merchs = mongoose.model("Merch", ecomMerchSchema);
const religious = mongoose.model("Religious", ecomReligiousSchema);
const gifts = mongoose.model("Gifts", ecomGiftsSchema);
const search = mongoose.model("search", searchDbSchema);
const admin = mongoose.model("admin", ecomAdminSchema);
const user1 = mongoose.model("UserDB", adminDbSchema);
const review = mongoose.model("reviews", ecomReviewSchema);
/* ---- GET Req Start ---- */
app.get("/adminData", (req, res) => {
  user1
    .find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => console.log(err));
});
app.get("/", (req, res) => {
  const data = {
    name: "Aritra",
    age: 21,
  };
  res.send(data);
});
app.get("/searchAPI", (req, res) => {
  search
    .find()
    .then((searches) => {
      res.json(searches);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/categorysAPI", (req, res) => {
  categorys
    .find()
    .then((category) => {
      res.json(category);
    })
    .catch((err) => console.log(err));
});

app.get("/merchsAPI", (req, res) => {
  merchs
    .find()
    .then((category) => {
      res.json(category);
    })
    .catch((err) => console.log(err));
});

app.get("/giftsAPI", (req, res) => {
  gifts
    .find()
    .then((category) => {
      res.json(category);
    })
    .catch((err) => console.log(err));
});

app.get("/religiousAPI", (req, res) => {
  religious
    .find()
    .then((category) => {
      res.json(category);
    })
    .catch((err) => console.log(err));
});

app.get("/reviewsAPI", (req, res) => {
  review
    .find()
    .then((category) => {
      res.json(category);
    })
    .catch((err) => console.log(err));
});

app.get("/ordersAPI", (req, res) => {
  generalOrder
    .find()
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      console.log(err);
    });
});
/*---- GET Request end ----*/

/* ---- POST Req Start ---- */
app.post("/categorysAPI", upload.single("file"), (req, res) => {
  let name = req.body.name;
  let author = req.body.author;
  let price = req.body.price;
  let stock = req.body.stock;
  let discount = req.body.discount;
  let category = req.body.category;
  let descr = req.body.description;
  let image = req.file.filename;
  let url = "http://127.0.0.1:8000/" + image;

  const LstName = author.split(" ");
  const fname = LstName[0];
  const lname = LstName[1];

  /* console.log(author);
  console.log(price);
  console.log(stock);
  console.log(discount);
  console.log(category);
  console.log(descr);
  console.log(image);
  console.log(url);*/

  let Newcategory = new categorys({
    name: name,
    author: author,
    price: price,
    stock: stock,
    discount: discount,
    category: category,
    image: url,
    descr: descr,
  });

  let searchObj = new search({
    bname: name,
    author: author,
    price: price,
    image: url,
    brand: "NA",
    stock: stock,
    category: "categorys",
    categorySupport: "category",
    genre: category,
    discount: discount,
    descr: descr,
    authorFname: fname,
    authorLname: lname,
    brandFname: "NA",
    brandLname: "NA",
  });

  Newcategory.save();
  searchObj.save();
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
  let val1;
  let val2;
  const descrArr = descr.split(" ");
  if (descrArr.length == 1) {
    val1 = descrArr[0];
    val2 = "NA";
  } else if (descrArr.length === 2) {
    val1 = descrArr[0];
    val2 = descrArr[1];
  }
  console.log(val1);

  let NewMerch = new merchs({
    name: name,
    price: price,
    stock: stock,
    discount: discount,
    category: category,
    image: url,
    descr: descr,
  });
  let searchObj = new search({
    bname: name,
    author: "NA",
    price: price,
    image: url,
    brand: descr,
    stock: stock,
    category: category,
    categorySupport: category.toLowerCase(),
    genre: category,
    discount: discount,
    descr: descr,
    authorFname: "NA",
    authorLname: "NA",
    brandFname: val1,
    brandLname: val2,
  });
  NewMerch.save();
  searchObj.save();
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
  /*let val1;
  let val2;
  const descrArr = descr.split(" ");
  if (descr.length == 1) {
    val1 = descrArr[0];
    val2 = "NA";
  } else if (descr.length === 2) {
    val1 = descrArr[0];
    val2 = descrArr[1];
  }*/
  let NewReligious = new religious({
    name: name,
    price: price,
    stock: stock,
    discount: discount,
    category: category,
    image: url,
    descr: descr,
  });
  let searchObj = new search({
    bname: name,
    author: "NA",
    price: price,
    image: url,
    brand: descr,
    stock: stock,
    category: category,
    categorySupport: category.toLowerCase(),
    genre: category,
    discount: discount,
    descr: descr,
    authorFname: "NA",
    authorLname: "NA",
    brandFname: "NA",
    brandLname: "NA",
  });

  NewReligious.save();
  searchObj.save();
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
  let val1;
  let val2;
  const descrArr = descr.split(" ");
  if (descr.length == 1) {
    val1 = descrArr[0];
    val2 = "NA";
  } else if (descr.length === 2) {
    val1 = descrArr[0];
    val2 = descrArr[1];
  }
  let NewGifts = new gifts({
    name: name,
    price: price,
    stock: stock,
    discount: discount,
    category: category,
    image: url,
    descr: descr,
  });
  let searchObj = new search({
    bname: name,
    author: "NA",
    price: price,
    image: url,
    brand: descr,
    stock: stock,
    category: category,
    categorySupport: category.toLowerCase(),
    genre: category,
    discount: discount,
    descr: descr,
    authorFname: "NA",
    authorLname: "NA",
    brandFname: "NA",
    brandLname: "NA",
  });

  NewGifts.save();
  searchObj.save();
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
app.post("/ordersAPI", (req, res) => {
  let name = req.body.name;
  let price = req.body.price;
  let stock = req.body.stock;
  let discount = req.body.discount;
  let category = req.body.category;
  let descr = req.body.descr;
  let url = req.body.url;

  const newOrder = new generalOrder({
    name: name,
    price: price,
    stock: stock,
    discount: discount,
    category: category,
    image: url,
    descr: descr,
  });

  newOrder.save();
});

app.post("/adminData", (req, res) => {
  let uname = req.body.uname;
  let password = req.body.password;
  const adminObj = new admin({
    uname: uname,
    password: password,
  });
  adminObj.save();
});
app.listen(8000, () => {
  console.log("Backend Connected");
});
/*--- POST Request END ---*/
