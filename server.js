const express = require("express");
const path = require("path");
const mainRouter = require("./routes/index");
const productRouter = require("./routes/products");
const apiKeyMiddleware = require("./middleware/apiKey");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(mainRouter);
app.use(productRouter);

app.get("*", (req, res) => {
  res.render("404", { title: "Express App | 404" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
