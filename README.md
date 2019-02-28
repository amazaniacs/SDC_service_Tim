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

## Usage 

To get started: 

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install -g nodemon
npm install
```

## CRUD - CREATE(POST)
```sh 
POST /api/buynow/:id 
``` 


## CRUD - READ(GET) 
```sh
GET /api/product/:id  
```

```sh
Respond  

This is what the data looks like when a "GET" request sent from client to server. 
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





