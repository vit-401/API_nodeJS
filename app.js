const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

//Middlewares
app.use(cors())
app.use(bodyParser.json())

const postsRoute = require('./routes/posts')
const usersRoute = require('./routes/users')

app.use('/posts', postsRoute)
app.use('/user', usersRoute)


app.get('/', function (req, res) {
    res.send('We are Heare')
})

app.get('/post', function (req, res) {
    res.send('We are on post')
})

mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log('connect to DB')
    })

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(port)


//Get data i JS
// fetch('http://localhost:3000/posts')
//     .then(res => {
//         return res.json()
//     })
//     .then(data => {
//         console.log(data)
//     })

