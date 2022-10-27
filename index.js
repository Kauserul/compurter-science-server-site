const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const course = require('./data/course.json')
const category = require('./data/category.json')

app.get('/', (req, res) =>{
    res.send('API start...')
})

app.get('/courses/:id', (req, res) =>{
    const id = req.params.id;
    const selectedCourse = course.find( c => c.id == id)
    res.send(selectedCourse)
})

app.get('/all-category' , (req, res) =>{
    res.send(category)
})

app.get('/category/:id', (req, res)=>{
    const id = req.params.id;
    const categoryItem = course.filter( c => c.id == id)
    res.send(categoryItem)
})

app.get('/courses', (req, res) =>{
    res.send(course)
})

app.listen(port, () => console.log('server runing' , port))
