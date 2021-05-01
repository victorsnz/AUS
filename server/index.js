const express = require('express');
const app = express();
const cors = require("cors");

var db = require('./dbConnect');

app.use(cors());
app.use(express.json());

app.get("/superheroes", (req, res) => {
  db.query("SELECT * FROM Superheroes", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      // res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});