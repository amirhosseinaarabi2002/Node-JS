const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const dbConnection = new MongoClient(process.env.dbConnectionUrl);
const dbName = process.env.dbName;

const main = async () => {
  await dbConnection.connect();
  console.log("Connected To DBConnection Successfully :))");

  const db = dbConnection.db(dbName);

  const usersCollection = db.collection("users");
  // const noCrimeUsers = await usersCollection.find({ crime: 0 }).toArray();

  // const mainUser = await usersCollection.findOne({
  //   _id: new ObjectId("688096aedda3609929c05cfa"),
  // });

  // const allUsers = await usersCollection.find({}).toArray();

  // const userInfo = await usersCollection.findOne({
  //   username: "Q_Yolme",
  //   role: "ADMIN",
  // });

  // console.log(noCrimeUsers);
  // console.log(mainUser);
  // console.log(allUsers);
  // console.log(userInfo);

  // usersCollection.insertMany([
  //   {
  //     name: "Qadir Yolme",
  //     username: "Q_Yolme",
  //     email: "test@gmail.com",
  //     crime: 0,
  //     role: "ADMIN",
  //   },
  //   {
  //     name: "Amin Saeedi",
  //     username: "01010101",
  //     email: "test@gmail.com",
  //     crime: 0,
  //     role: "ADMIN",
  //   },
  //   {
  //     name: "Ehsan Mmdi",
  //     username: "ehs",
  //     email: "test@gmail.com",
  //     crime: 90000,
  //     role: "ADMIN",
  //   },
  // ]);

  const booksCollection = db.collection("books");
  // await booksCollection.insertOne({
  //   title: "Nodejs Book",
  //   author: "Person 1",
  //   price: 200000,
  //   free: 0,
  // });

  const rentCollection = db.createCollection("rents");
  // (await rentCollection).insertMany([
  //   { userID: 1, bookID: 1 },
  //   {
  //     userID: "fc9b7cd0-173c-4f5f-9bc8-ec9c062d7379",
  //     bookID: 2,
  //   },
  // ]);

  // const deleteResult = (await rentCollection).deleteOne({
  //   _id: new ObjectId("6880a070b3dfe816e7d2aa2c"),
  // });
  // const deleteResult = (await rentCollection).findOneAndDelete({
  //   _id: new ObjectId("6880a070b3dfe816e7d2aa2b"),
  // });
  // const deleteResult = (await rentCollection).deleteMany({ bookID: 2 });

  // console.log(deleteResult);

  // const result = (await rentCollection).updateOne({ bookID: 1 }, {
  //   $set: {
  //     bookID: 5
  //   }
  // })

  // const result = (await rentCollection).updateMany({ bookID: 5 }, {
  //   $set: {
  //     bookID: 5,
  //     userID: 10
  //   }
  // })

  // const result = (await rentCollection).findOneAndUpdate({ _id: new ObjectId("6880a27bbfb4b8471644c5b5") }, {
  //   $set: {
  //     bookID: 7,
  //     userID: 11
  //   }
  // })

  // const result = (await rentCollection).replaceOne({ userID: 10 }, {
  //   score: 20
  // })

  // const result = (await rentCollection).findOneAndReplace({ score: 20 }, {
  //   score: 30,
  //   userID: 3,
  //   bookID: 2
  // })

  // const result = await usersCollection.insertOne({
  //   name: "ali",
  //   username: "ali_mmdi",
  //   email: "ali@gmail.com",
  //   crime: 0,
  //   role: "USER",
  //   exprience: ["node js", "next js", "flutter"],
  //   location: {
  //     city: "tehran",
  //     workplace: "vada"
  //   }
  // });

  // const userList = usersCollection.findOne({ _id: new ObjectId("6880c96dd65572c9cdd64f0d") })

  // console.log(userList.location);

  const operators = await usersCollection
    .find({
      // role: { $ne: "USER" },
      // role: { $eq: "USER" },
      // crime: { $lt: 7000 },
      // crime: { $lte: 90000 },
      // crime: { $gt: 0 },
      // crime: { $gte: 0 },
      // name: { $in: ["ali", "Qadir Yolme"] },
      // name: { $nin: ["ali", "Qadir Yolme"] },

      $or: [{ name: { $in: ["ali", "Qadir Yolme"] } }, { crime: { $gt: 0 } }],
    })
    .toArray();

  // const deleteItem = usersCollection.deleteOne({
  //   "location.city": "tehran",
  // });

  // const removeCollection = await booksCollection.drop();
  // const removeCollection = await db.collection("books").drop();
  // const removeCollection = await db.dropCollection("books");

  // const removeData = db.dropDatabase();

  // console.log(result);

  return "Done";
};

main();
