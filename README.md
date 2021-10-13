## KOA-Graphql-MySQL
## Features
* Based on **Koa**，integrate with session，logger，ejs template，**apollo-graphql**, **sequelize**., etc.
* use log4js to output log records based on the level
* use ejs as template engine
* use apollo-graphql-koa for graphql api
* use custom directive for auth and other features
* use sequelize for ORM
* use dotenv for env variables
* use pm2 to monitor the app

## How to start
1. run ```npm install``` to install dependencies.
2. start mysql database and config database configurations according to /config/default.js file
3. run ```npm run local``` to start on the local environment


## Sample queries
```
mutation {
  login(id: "1") {
    name,
    sex,
    id
  }
}

mutation {
  logout 
}


query {
  getUser {
    name,
    sex,
    id
  }
}
mutation {
  register(name: "test1", age: 18, sex: "male", height: 160, weight: 90) {
    name,
    sex,
    age,
    weight,
    height
  }
}


```