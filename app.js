const express = require("express");
const usersModel = require("./models/users");
// const bodyParser = require("body-parser");
const registerValidator = require("./validators/register");
require("./configs/db")

const app = express();
app.use(express.json());
app.use(express.urlencoded());

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

app.post("/api/users", async (req, res) => {

  const validationResult = registerValidator(req.body);
  
    if (validationResult !== true) {
      return res.status(422).json(validationResult);
    }

   let { name, username, email, age, password } = req.body;
  
    const result = await usersModel.create({
      name,
      email,
      username,
      age,
      password,
    });
  
    res.status(201).json({
      message: "New user create successfully",
      result,
    });
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
