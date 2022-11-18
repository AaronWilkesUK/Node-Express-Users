import express from "express";
import {v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [];

router.get('/', (req, res) => {
    res.send(users);
})

router.post('/', (req, res) => {
    const user = req.body;
    const userID = uuidv4();
    const newUser = { ...user, id: userID }
    users.push(newUser);
    res.send("User added");
})

router.get('/:id', (req, res) => {
    const {id} = req.params;

    const user = users.find((user) => user.id === id)
    res.send(user);
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    users = users.filter((user) => user.id !== id);

    res.send("User Deleted");
})

router.patch('/:id', (req, res) => {
    const {id} = req.params;
    const { firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id === id);

    if(firstName) {
        user.firstName = firstName;
    }

    if(lastName) {
        user.lastName = lastName;
    }

    if(age) {
        user.age = age;
    }

    res.send("User Updated");
})

export default router;