const express = require('express');
const login = express();
const users = require('../constants/usersData');

login.get('/', (req, res) => {
    const {Authentication} = req.session;
    if(Authentication){
        res.json(Authentication);
    }else{
        res.status(401).json('Not Authenticated.');
    }
})

login.post('/', (req, res) => {
    const {username, password} = req.body;
    if(!username || !password){
        res.status(400).json("Please provide username and password both");
    }else{
        if(users[username]){
            if(users[username] === password){
                req.session.Authentication = req.body;
                res.status(202).json({
                    Message:"Successfully loged in",
                    user:req.session.Authentication
                });
            }else{
                res.status(400).json("Please enter correct password.");
            }
        }else{
            res.status(404).json("User not found");
        }
    }
})

module.exports = login;