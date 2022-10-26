var ExpressCassandra = require('express-cassandra');
const express = require('express');
let cors = require('cors');
const router = require('./routers/router');
require("./db/conn");

app = express()
app.use(cors())
app.use(express.json())

const PORT = 8080;

app.use(router);

app.get("/hello-world", (req, res) => {
    return res.send("Hello World");
})

var server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

module.exports = server;




