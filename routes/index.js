const router = require("express").Router();
const apiKeyMiddleware = require("../middleware/apiKey");

// router.use(apiKeyMiddleware);

router.get("/", (req, res) => {
  res.render("index", {
    title: "Express App | Home",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "Express App | About Us",
  });
});

router.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/about.html");
});

// router.get("*", (req, res) => {
//   res.render("404", { title: "Express App | 404" });
// });

module.exports = router;
