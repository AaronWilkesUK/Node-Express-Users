import {v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;
    const userID = uuidv4();
    const newUser = { ...user, id: userID }
    users.push(newUser);
    res.send("User added");
}

export const getUser = (req, res) => {
    const {id} = req.params;

    const user = users.find((user) => user.id === id)
    res.send(user);
}

export const deleteUser = (req, res) => {
    const {id} = req.params;
    users = users.filter((user) => user.id !== id);

    res.send("User Deleted");
}

export const updateUser = (req, res) => {
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
}