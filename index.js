const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const course = require('./data/course.json')

app.get('/', (req, res) =>{
    res.send('API Running soon...')
})

app.get('/courses', (req, res) =>{
    res.send(course)
})

app.listen(port, ()=>{
    console.log('Server running', port)
})