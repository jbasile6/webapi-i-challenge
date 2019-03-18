// implement your API here
const express = require('express');

const db = require('./data/db.js');

const server = express();

server.use(express.json());

server.get('/api', (req, res) => {
    res.send('BackEnd Week 1 Day 1 Project');
})

server.get('/api/users', (req, res) => {
    db.find()
        .then( users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({ error: "The users information could not be retrieved." })
        });
});

//At the bottom
server.listen(4000, () => {
    console.log('\n** API up and running on port 4k **');
});