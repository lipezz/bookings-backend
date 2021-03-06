const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');

const app = express();

mongoose.connect('mongodb://localhost:27017/airbnb', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//app.use(cors({ origin: 'http://localhost:3333' }));

app.use(cors());

app.use(express.json());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);

app.listen(3333);