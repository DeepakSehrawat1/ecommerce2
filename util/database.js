const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://deepaksehrawat150:7Okv6ePzLEqREYgE@cluster0.9jqfnbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
    .then((client) => {
      db = client.db("shop");
      console.log("connected");
      callback();
    })
    .catch((err) => {
      console.log(err);
    });
};

const getdb = () => {
  if (db) {
    return db;
  }

  throw "not connected to db";
};

exports.mongoConnect = mongoConnect;
exports.getdb = getdb;
