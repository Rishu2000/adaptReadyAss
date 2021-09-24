const express = require('express');
const register = express();

register.get('/', (req, res) => {
    res.json('You are in register folder.');
})

register.post('/', (req, res) => {
    const {username, password} = req.body;
})

module.exports = register;