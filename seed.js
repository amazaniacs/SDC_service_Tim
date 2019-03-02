var fs = require('fs');
var wstream = fs.createWriteStream('myData.csv');

// feedToArr function 
let feedToArr = (data, number = 1000000) => {

	for(let j = 0; j < number; j++) {

		let obj = {
			id: j+1,
			name: `Amazon Product${j + 1}`,
			price: Number((Math.random() * 100).toFixed(2)),
			quantity: Number((Math.random() * 100).toFixed(0)),
			isPrime: false,
			inCart: false,
			cartQuantity: 0
		}; 
		data.push(obj); 
	}
}

let writeOneMillionTimes = (writer, data, encoding,callback) => {
  let i = 1000000;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      let index = 1000000 - 1 - i; 
      let newData = data[index].id + "," + data[index].name + "," + data[index].price + "," + data[index].quantity + ", " + data[index].isPrime + ", " + data[index].inCart + ", " + data[index].cartQuantity + "\n";
      if (i === 0) {
        // last time!
        writer.write(newData, encoding, callback);
      } else {

        ok = writer.write(newData, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
}

let startToWrite = () => {
	let data = []; 
	feedToArr(data); // call function to feed in data to array. 
	writeOneMillionTimes(wstream, data, "UTF-8", (err, data) => {
		if(err) {
			console.log(err);
			return;
		}

	})	
}

/* 
Start calling functions to seed data to csv file.	
*/

startToWrite(); 








