"use strict";
const express = require("express");
const cors = require("cors");
// importing questions
const { questions } = require("./data/questions.json");
// create and app
const app = express();
// use cors
app.use(cors());

app.get("/", Home);
// Home function
function Home(req, res) {
  // clearing redundant data
  Questions.allQuestions = [];
  questions.map((questionItem) => {
    new Questions(
      questionItem.question,
      questionItem.options,
      questionItem.correctOption,
      questionItem.points
    );
  });
  res.status(200).json({
    code: 200,
    message: Questions.allQuestions,
  });
}

function Questions(question, options, correctOption, points) {
  this.question = question;
  this.options = options;
  this.correctOption = correctOption;
  this.points = points;
  Questions.allQuestions.push(this);
}
// Having all data in one array
Questions.allQuestions = [];
//listening to a port
app.listen(3011, () => {
  console.log("Server is running on port 3011");
});
