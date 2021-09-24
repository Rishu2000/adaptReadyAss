const express = require('express');
const register = express();
const users = require('../constants/usersData')

register.get('/', (req, res) => {
    res.json(users);
})

register.post('/', (req, res) => {
    const {username, password} = req.body;
    if(!username || !password){
        res.status(400).json("Please provide username and password both");
    }else{
        if(!users[username]){
            users[username] = password;
            res.status(201).json({
                Success: true,
                Message:username
            })
        }else{
            res.status(409).json("User already exits.")
        }
    }
})

module.exports = register;