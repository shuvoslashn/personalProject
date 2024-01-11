const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//? API to check connection
app.get("/", (req, res) => {
    res.send(`Server working successfully`);
});

//? API to create a user
app.post("/users", async (req, res) => {
    try {
        const user = await req.body;
        const { fname, lname, job } = user;
        res.status(201).send({
            success: true,
            details: {
                fname,
                lname,
                job,
            },
        });
    } catch (error) {
        console.log(error);
    }
});

//? API to get all users
app.get("/users", async(req, res));

const port = 8080;
app.listen(port, () => {
    console.log(`server running at ${port}`);
});
