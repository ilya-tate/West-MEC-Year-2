const express = require("express");

const app = express();
const port = 3000;

app.use(express.static("./public"));

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => console.log(`App is listening at port ${port}`));
