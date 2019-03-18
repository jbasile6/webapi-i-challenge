// implement your API here
const express = require('express');

const db = require('./data/db.js');

const server = express();

server.use(express.json());
//^^ access to PUT and POST

server.get('/api', (req, res) => {
    res.send('BackEnd Week 1 Day 1 Project');
})


//GET
server.get('/api/users', (req, res) => {
    db.find()
        .then( users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({ error: "The users information could not be retrieved." })
        });
});

//GET
server.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
    db.findById(id)
        .then(user => {
            if (!user) {
                res.status(404).json({ message: "The user with the specified ID does not exist." })
            } else {
                res.status(200).json(user);
            }
        })
        .catch(err => {
            res.status(500).json({ error: "The user information could not be retrieved." })
        })
})


//POST
server.post('/api/users', (req, res) => {
    const useName = req.body.name;
    const userBio = req.body.bio;

    if (!userName || !userBio) {
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    } else {
        db.add({ userName, userBio })
            .then(user => {
                res.status(201).json(user)
            })
            .catch( err => {
                res.status(500).json({ error: "There was an error while saving the user to the database" })
            })
    }
})




//At the bottom
server.listen(4000, () => {
    console.log('\n** API up and running on port 4k **');
});