const express = require("express");
const morgan = require("morgan");
const omitEmpty = require("omit-empty");
const helmet = require("helmet");
const path = require("path");
// const camelCaseMain = (...args) =>
//   import("camelcase-keys").then(({ default: camelcase }) => camelcase(args));
// const bodyParser = require("body-parser");
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");
const teacherRouter = require("./routes/teacher");
const coursesRouter = require("./routes/course")
const viewPath = require("./helper/path");
// const { testMiddleware } = require("./middlewares/test");
require("./configs/db");
const cors = require("cors");

const app = express();
// const camelcase = async (req, res, next) => {
//   req.body = await camelCaseMain(req.body);
//   req.params = await camelCaseMain(req.params);
//   req.query = await camelCaseMain(req.query);

//   console.log(req.body);
//   console.log(req.params);
//   console.log(req.query);

//   next();
// };
// app.use(camelcase())
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded());

// app.use((req, res, next) => {
//   console.log("first middleware");
//   next();
// });

// app.use(testMiddleware); // global middleware

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

const port = 4000;

// const courses = [
//   {
//     id: 1,
//     name: "react js",
//   },
//   {
//     id: 2,
//     name: "next js",
//   },
//   {
//     id: 3,
//     name: "node js",
//   },
//   {
//     id: 4,
//     name: "express js",
//   },
// ];

// app.get("/courses/:id", (req, res) => {
//   console.log(req.params.id);

//   const course = courses.find((course) => course.id === Number(req.params.id));

//   if (course) {
//     res.send(course);
//     // res.json(course)
//     // res.end("Hello course!") // depreacated
//   } else {
//     res.send("course not found");
//   }
// });

// app.post("/courses", (req, res) => {
//   //   res.status(200).send("added");
//   console.log(req.body);

//   res.statusCode = 201;
//   res.send("added");
// });

// app.delete("/courses/:id", (req, res) => {
//   res.status(201).send("deleted");
// });

// app.put("/courses/:id", (req, res) => {
//   res.status(201).send("updated");
// });

// app.get("/api/users/:userID/articles/:articleID", (res, req) => {
//   console.log(req.params.userID);
//   console.log(req.params.articleID);

//   res.json({
//     message: "sent",
//   });
// });

// app.get("/test/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(id);

//   // res.send(isValidObjectId(id));
//   res.send(mongoose.Types.ObjectId.isValid(id));
// });

// app.get(
//   "/api/virgool",
//   testMiddleware, // local middleware
//   (req, res, next) => {
//     console.log("second middleware");
//     next();
//   },
//   (req, res) => {
//     res.json({
//       message: "virgool published!",
//     });
//   }
// );

// console.log(
//   omitEmpty(
//     {
//       name: "amir",
//       pass: "",
//       score: 0,
//     },
//     {
//       omitZero: true,
//     }
//   )
// );

const removeEmpty = async (req, res, next) => {
  req.body = await omitEmpty(req.body, { omitZero: true });
  console.log(req.body);
  next();
};
app.use(removeEmpty);

app.use(helmet());

app.get("/", (req, res) => {
  res.sendFile(path.join(viewPath, "index.html"));
});

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/users/", usersRouter);
app.use("/api/books/", booksRouter);
app.use("/api/teacher/", teacherRouter);
app.use("/api/courses/", coursesRouter);

app.use((req, res) => {
  // return res.status(404).sendFile(path.join(viewPath, "404.html"))
  return res.status(404).json({
    message: "page not found!",
  });
});

// app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
