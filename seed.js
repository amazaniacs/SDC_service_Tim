var fs = require('fs');
var wstream = fs.createWriteStream('data.csv');

let writeNTimes = (n, writer, encoding, callback) => {
  let i = 10000000 * n;
  let num = 10000000 * n;
  let j = 0;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      let index = num - 1 - i;
      let obj = {
        id: index + 1,
        name: `Amazon Product ${index + 1}`,
        price: Number(Math.floor((Math.random() * 100).toFixed(2))),
        quantity: Number(Math.floor((Math.random() * 100).toFixed(0))),
        isPrime: false,
        inCart: false,
        cartQuantity: 0
      };

      let newData = obj.id + "," + obj.name + "," + obj.price + "," + obj.quantity + "," + obj.isPrime + "," + obj.inCart + "," + obj.cartQuantity + "\n";
      if (i === 0) {
        writer.write(newData, encoding, callback);
      } else {

        if (index === 0) {
          let temp = "id" + "," + "name" + "," + "price" + "," + "quantity" + "," + "isPrime" + "," + "inCart" + "," + "cartQuantity" + "\n";
          writer.write(temp, encoding, callback);
          writer.write(newData, encoding, callback);
        }
        else {
          ok = writer.write(newData, encoding);
        }

      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
}

let startToWrite = () => {
  writeNTimes(1, wstream, "UTF-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
  })
}

/* 
Start calling functions to seed data to csv file.	
*/

startToWrite();