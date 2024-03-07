const express = require("express");
const bodyParser = require("body-parser");
const cors=require('cors');
const path = require('path');
const app = express();
const port = 3000;
app.use(cors());
// Middleware
app.use(bodyParser.json());
// Mock user data (replace with actual database or authentication logic)
const validUser = {
    username: "123",
    password: "321"
};

// Route for login
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username === validUser.username && password === validUser.password) {
        res.sendStatus(200);
    } else {
        res.send("请核对账号和密码");
    }
});
// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});