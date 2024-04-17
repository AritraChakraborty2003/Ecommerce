import express from "express";
const app = express();

app.get("/", (req, res) => {
  const data = {
    name: "Aritra",
    age: 21,
    degree: "B.Tech",
  };
  res.end(JSON.stringify(data));
});
app.listen("8000", () => {
  console.log("");
});
