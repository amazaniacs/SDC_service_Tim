# SDCservice_Tim

# Project Name 

> amazaniacs - add to cart 

## Related Prjects 

  - https://github.com/jujoco/SDCservice_Julian
  - https://github.com/amazaniacs/SDCservice_Matt
  - https://github.com/TingbinHuang/SDCservice_Tim
  - https://github.com/tdo94/SDCservice_TD

## Table of Contents

1. [Usage](#Usage)
2. [CRUD](#CRUD)

# Usage 

To get started: 

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install -g nodemon
npm install
```

# CRUD

### -CREATE (POST)
```sh 
POST /api/buynow/:id 
``` 

### Example
```sh
This will create data and post it to database. In this case, data will be insert to DB when user make any purchases. Those can be items that users want to leave on the cart so they can come back to make purchase next time. 

app.post("/api/buynow/:id ", (req, res) => {

  // post(req.body.name, req.body.date, req.body.item, req.body.price, req.body.quantity)

})
```

### - READ (GET) 
```sh
GET /api/product/:id  
```

```sh
This is what the data looks like when a "GET" request sent from client to server. 

 app.get("/api/product/:id", (req, res) => {

  // get data ... 

 })
``` 

### Example
```sh 
{
  price: 25, 
  quantity: 10,
  isPrime: false,
  inCart: true,
  cartQuantity: 0
}
```

### - UPDATE (PUT) 

```sh
PUT /api/update/:category/:amount
```

### Example
```sh 
This is the way to update or change something to database. Specially, it can be something that users want to change the quantity they purchase in the cart in future. 

app.put("/api/update/:category/:amount", (req,res) => {

  res.send('PUT request to homepage');

})
``` 

### - DELETE (DELETE) 

```sh 
DELETE /api/delete/:id
```

### Example
```sh 
This is a DELETE request to a path with a callback function. 

app.delete('/api/delete/:id', function (req, res) {
  res.send('DELETE request to homepage');
});
```

```sh
app.delete(path, callback [, callback ...])
```





