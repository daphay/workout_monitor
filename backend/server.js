const express = require('express');
const cors    = require('cors');
const mongoose = require('mongoose');
const app     =express();
require('dotenv').config();
const port = process.env.port|| 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true});
const connection = mongoose.connection;
connection.once('open', () =>{
    console.log('mongoDB database connection successful');
});

const usersRouter = require('./routes/users');
const workoutsRouter = require('./routes/workouts');

app.use('/users', usersRouter);
app.use('/workouts', workoutsRouter);

app.listen(port, () =>{
    console.log(`server has stated on port ${port}`);
});