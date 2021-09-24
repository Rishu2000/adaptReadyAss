const express = require('express');
const register = express();

register.get('/', (req, res) => {
    res.json('You are in register folder.');
})

module.exports = register;