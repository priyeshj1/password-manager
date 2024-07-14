const express = require("express");
const mysql = require('mysql');
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const {encrypt, decrypt} = require('./Encryption')

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root123",
    database: "passwordmanager",
});

app.get("/getpassword", (req, res) => {
    db.query("SELECT * FROM passwords;",(err, result) => {
        if(err){
           console.log(err)
        } else {
            res.send(result);
        }
    })
});

app.post("/register", (req, res) => {
    const { password, title } = req.body;
    const hashpass = encrypt(password);

    db.query("INSERT INTO passwords (password, title, iv) VALUES (?, ?, ?)", [hashpass.pass, title, hashpass.iv], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Values inserted");
        }
    });
});

app.post("/decryptpassword", (req, res) => {
    res.send(decrypt(req.body))
});

app.listen(3001, () => {
    console.log("Server started on port 3001");
})


