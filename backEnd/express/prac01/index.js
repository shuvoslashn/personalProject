const express = require('express');
const app = express();

// middleware just a function
app.use((req, res, next) => {
    const id = req.params.id;
    if (id) {
        console.log(`there is a param`);
        next();
    }
});

app.get('/', (req, res) => {
    res.send(`<h1>Hi I'm from Express</h1>`);
});

app.get('/contact', (req, res) => {
    res.send(`<h1>Mail Me</h1>`);
});

app.listen(8080, () => {
    console.log(`server running successfully`);
});
