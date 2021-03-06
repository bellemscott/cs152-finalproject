"use strict";

const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  router = require("./router"),
  contentTypes = require("./contentTypes"),
  utils = require("./utils");

router.get("/", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.htm);
  utils.getFile("views/index.html", res);
});

// router.get("/courses.html", (req, res) => {
//   res.writeHead(httpStatus.OK, contentTypes.html);
//   utils.getFile("views/courses.html", res);
// });

//adding about page
router.get("/about.html", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/about.html", res);
});

router.get("/mass.html", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/mass.html", res);
});
//adding belle info page
// router.get("/belle.html", (req, res) => {
//   res.writeHead(httpStatus.OK, contentTypes.html);
//   utils.getFile("views/belle.html", res);
// });

// router.get("/contact.html", (req, res) => {
//   res.writeHead(httpStatus.OK, contentTypes.html);
//   utils.getFile("views/contact.html", res);
// });

// router.post("/", (req, res) => {
//   res.writeHead(httpStatus.OK, contentTypes.html);
//   utils.getFile("views/thanks.html", res);
// });

// router.get("/graph.png", (req, res) => {
//   res.writeHead(httpStatus.OK, contentTypes.png);
//   utils.getFile("public/images/graph.png", res);
// });

// router.get("/people.jpg", (req, res) => {
//   res.writeHead(httpStatus.OK, contentTypes.jpg);
//   utils.getFile("public/images/people.jpg", res);
// });

router.get("/mass.png", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.jpg);
  utils.getFile("public/images/mass.png", res);
});

router.get("/baker.jpg", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.jpg);
  utils.getFile("public/images/baker.jpg", res);
});

router.get("/custom.css", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.css);
  utils.getFile("public/css/custom.css", res);
});

router.get("/bootstrap.css", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.css);
  utils.getFile("public/css/bootstrap.css", res);
});

router.get("/confetti_cuisine.js", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.js);
  utils.getFile("public/js/confetti_cuisine.js", res);
});

http.createServer(router.handle).listen(port);
console.log(`The server is listening on port number: ${port}`);
