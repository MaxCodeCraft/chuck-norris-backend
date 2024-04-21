var express = require("express");
var router = express.Router();
const Joke = require("../models/jokes");

router.post("/getjoke", function (req, res) {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((data) => {
      const newJoke = new Joke({
        date: new Date(),
        value: data.value,
      });
      newJoke.save().then((data) => {
        console.log(data);
      });
    });
});

router.get("/list", function (req, res) {
  Joke.find().then((data) => {
    console.log(data);
    const results = [];
    data.forEach((obj) => {
      const newObj = {
        date: obj.date,
        value: obj.value,
      };
      results.push(newObj);
    });
    res.json(results);
  });
});

module.exports = router;
