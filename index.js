const express = require("express");
const app = express();

app.listen(3001, () => {
    console.log("Server running on port 3001");
});

app.use(express.json());

const students = [
    {
        id: 1,
        name: "levi",
        age: 24,
        gender: "male",
        grade: 10
    },
    {
        id: 2,
        name: "Alpha",
        age: 25,
        gender: "male",
        grade: 10
    },
    {
        id: 3,
        name: "Tiana",
        age: 20,
        gender: "female",
        grade: 10
    }
];

app.get("/students", (req, res) => {
    res.json(students);
});
app.post("/students", (req, res) => {
    const student = req.body;
    students.push(student);
    res.json(students);
});