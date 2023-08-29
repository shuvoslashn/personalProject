const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 6060;

app.use(bodyParser.json());

//* Global Variables
const users = [];
let lastId = 0;

//? api to check connection
app.get('/', (req, res) => {
    res.json({ message: `welcome to our app` });
});

//? api to create a user
app.post('/users', (req, res) => {
    const user = req.body;
    user.id = ++lastId;
    users.push(user);
    res.status(201).json(user);
});

//? api to get all users
app.get('/users', (req, res) => {
    res.json(users);
});

//? api to get single users
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find((i) => i.id === +id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json(`User not found`);
    }
});

//? api to update single users
// app.put('/users/:id', (req, res) => {
//     const id = req.params.id;
//     const body = req.body;
//     const user = users.find((i) => i.id === +id);
//     if (user) {
//         user.fname = body.fname;
//         user.lname = body.lname;
//         res.json(user);
//     } else {
//         res.status(404).json(`User not found`);
//     }
// });

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
