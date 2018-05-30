const express = require('express');
const app = express();
const knex = require('knex');
const path = require('path')
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')
const listening = () => {
    console.log('server listening')
}

app.use(express.json()); //parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/', (req, res, next) => {
//     const index = path.join(__dirname, '../public/index.html')
//     res.sendFile(index)
//   })
app.get("/", (req, res, next) => {
    return knex("puppy")
    .then(puppy => res.json({puppy: puppy}))
})

app.listen(port, listening)