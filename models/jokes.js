const mongoose = require("mongoose");

const jokeSchema = mongoose.Schema({
  date: Date,
  value: String,
});

const Joke = mongoose.model("jokes", jokeSchema);

module.exports = Joke;
