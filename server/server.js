const express = require('express');
const app = express();
const cors = require('cors');
const port = 4001;
const login = require('./route/login');
const register = require('./route/register');

app.use(cors());

app.use('/login',login);
app.use('/register',register);
app.get('/', (req, res) => {
    res.json('You are in root folder.');
})

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})