require('dotenv').config();
const express = require('express');
const massive = require('massive');
const ctrl = require('./controllers')

const {CONNECTION_STRING, SERVER_PORT} = process.env

const app = express();

app.use(express.json());

//ENDPOINTS
app.get('/api/cars', ctrl.getAllCars);
app.get('/api/cars/:id', ctrl.getCar);


massive({ //this function connects our server to the database
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then( db => {
    app.set('db', db) //tell massive to look for a folder called db and that db will be our database
    app.listen(SERVER_PORT, () => console.log(`Connected to ${SERVER_PORT}`))
})

