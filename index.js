const express = require("express");
const app = express();

app.use(express.json());

app.listen(3001, () => {
    console.log("Server running on port 3001");
});

// const students = [
//     { id: 1, name: "Levi", age: 24, gender: "male", grade: 10 },
//     { id: 2, name: "Alpha", age: 25, gender: "male", grade: 10 },
//     { id: 3, name: "Tiana", age: 20, gender: "female", grade: 10 }
// ];

let users = [
    { id: 1, name: "alpha", email: "alpha@gmail.com", password: "alpha123" },
    { id: 2, name: "beta", email: "beta@gmail.com", password: "beta123" },
    { id: 3, name: "gamma", email: "gamma@gmail.com", password: "gamma123" }
];
// app.get("/students", (req, res) => {
//     res.json(students);
// });

// app.post("/students", (req, res) => {
//     const student = req.body;
//     students.push(student);
//     res.json(students);
// });

app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/users", (req, res) => {
    const user = req.body;
    users.push(user);
    res.json(users);
});
