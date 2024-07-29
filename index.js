const express = require("express");
const app = express();
const path = require("path"); // Import the path module
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  // res.send("Hello World!");
  app.use(express.static(path.join(__dirname, "public")));
});

app.get("/about", (req, res) => {
  // res.send("This is the Contact page. asim kabir");
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/contact", (req, res) => {
  // res.send("This is the Contact page. asim kabir");
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
