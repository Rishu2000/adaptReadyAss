const express = require('express');
const login = express();

login.get('/', (req, res) => {
    res.json('You are in login folder.');
})

module.exports = login;