require('dotenv').config()

module.exports ={
  "development": {
    "username": "root",
    "password": "root_1234",
    "database": "ruthie_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  }
}

/* "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASS || null,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port" : process.env.DB_PORT,
     "username": "freedbtech_paolaescudero",
    "password": "latinmailFreedb",
    "database": "freedbtech_ruthiedb",
    "host": "freedb.tech", */