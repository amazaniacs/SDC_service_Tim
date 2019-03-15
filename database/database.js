const mongo_client = require('mongodb').MongoClient;
var db = "";
var length = 100000000; 
var obj = {}; 

mongo_client.connect("mongodb://Tim:753@18.223.21.48/sdc_db", (err, mongoClient) => {
  
    if (err) {
     console.log("Failed");
     console.log(err);
    return;
  }
  db = mongoClient.db("sdc_db");
})

const getItem = (id, callback) => {
  

  db.collection("test").find({ id: id }).toArray((err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    callback(null, data);
  })
}

const saveItem = () => {
  length++;
  var price = Number(Math.floor((Math.random() * 100).toFixed(2)));
  var quantity = Number(Math.floor((Math.random() * 100).toFixed(0)));
  var obj = {
    "id": length,
    "name": `Amazon Product ${length}`,
    "price": price,
    "quantity": quantity,
    "isPrime": false,
    "inCart": false,
    "cartQuantity": 0
  };
  db.collection("test").save(obj);
}
module.exports.getItem = getItem;
module.exports.saveItem = saveItem;
