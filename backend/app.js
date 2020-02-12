const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express(); 

const PORT = 6000; 
const carsRouter = require('./queries/cars/cars');
const usersRouter = require('./routes/users/users');


app.use(cors);
app.use('/cars', usersRouter);
app.use('/users', usersRouter)

app.use((err, req, res, next) => {
    res.status(500).json({
        err
    })
})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(PORT, () => console.log("Listening"));
