// Create web server
const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
// Comments array
const comments = [
  {
    name: "John Doe",
    date: "10/15/2021",
    comment: "This is an awesome post!",
  },
  {
    name: "Jane Smith",
    date: "10/16/2021",
    comment: "Great job!",
  },
  {
    name: "James Brown",
    date: "10/17/2021",
    comment: "Keep up the good work!",
  },
];
// Select the comments section
const commentsSection = document.querySelector(".comments");
// Loop through the comments array
comments.forEach((comment) => {
  // Create a new div element for each comment
  const commentElement = document.createElement("div");
  // Create a new h3 element for the comment name
  const nameElement = document.createElement("h3");
  // Create a new p element for the comment date
  const dateElement = document.createElement("p");
  // Create a new p element for the comment text
  const commentTextElement = document.createElement("p");
  // Add the name to the h3 element
  nameElement.textContent = comment.name;
  // Add the date to the p element
  dateElement.textContent = comment.date;
  // Add the comment text to the p element
  commentTextElement.textContent = comment.comment;
  // Append the name element to the comment element
  commentElement.appendChild(nameElement);
  // Append the date element to the comment element
  commentElement.appendChild(dateElement);
  // Append the comment text element to the comment element
  commentElement.appendChild(commentTextElement);
  // Append the comment element to the comments section
  commentsSection.appendChild(commentElement);
});