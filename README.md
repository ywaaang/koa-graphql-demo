## KOA-Graphql-MySQL
*** 
## Features
* Based on **Koa**，integrate with session，logger，ejs template，**apollo-graphql**, **sequelize**., etc.
* use koa-session-minimal to store user session id
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
3. create koa_users table
4. run ```npm run local``` to start on the local environment

## Database config

```sql
CREATE TABLE `koa_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `weight` int DEFAULT NULL,
  `height` int DEFAULT NULL,
  `age` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

