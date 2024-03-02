const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

// test server layout
app.get("/test", (req, res) => {
  res.json("Hello World!!");
});

app.post("/register", (req, res) => {
  const { userName, password } = req.body;
  res.json({ userName, password });
});

app.listen(port, () => {
  console.log(`App listening and Successfully running on port ${port}`);
});
