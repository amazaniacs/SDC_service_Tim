const mongo_client = require('mongodb').MongoClient;
let db = "";
let length = 100000000;

mongo_client.connect("mongodb://localhost:27017/", (err, mongoClient) => {
  if (err) {
    console.log(err);
    return;
  }
  db = mongoClient.db("newTest");
})

const getItem = (id, callback) => {
  db.collection("amazonCart").find({ id: id }).toArray((err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    callback(null, data);
  })
}

const saveItem = () => {
  length++;
  let price = Number(Math.floor((Math.random() * 100).toFixed(2)));
  let quantity = Number(Math.floor((Math.random() * 100).toFixed(0)));
  let obj = {
    "id": length,
    "name": `Amazon Product ${length}`,
    "price": price,
    "quantity": quantity,
    "isPrime": false,
    "inCart": false,
    "cartQuantity": 0
  };
  db.collection("amazonCart").save(obj);
}

module.exports.getItem = getItem;
module.exports.saveItem = saveItem;