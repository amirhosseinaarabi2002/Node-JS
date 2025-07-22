const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/";
const dbConnection = new MongoClient(url);
const dbName = "library";

const main = async () => {
  await dbConnection.connect();
  console.log("Connected To DBConnection Successfully :))");

  const db = dbConnection.db(dbName);

  const usersCollection = db.collection("users");
  usersCollection.insertOne({
    name: "Qadir Yolme",
    username: "Q_Yolme",
    email: "test@gmail.com",
    crime: 0,
    role: "ADMIN",
  });

  const booksCollection = db.collection("books");
  await booksCollection.insertOne({
    title: "Nodejs Book",
    author: "Person 1",
    price: 200000,
    free: 0,
  });

  const rentCollection = db.createCollection("rents");
  (await rentCollection).insertMany([
    { userID: 1, bookID: 1 },
    {
      userID: "fc9b7cd0-173c-4f5f-9bc8-ec9c062d7379",
      bookID: 2,
    },
  ]);

  return "Done";
};

main();
