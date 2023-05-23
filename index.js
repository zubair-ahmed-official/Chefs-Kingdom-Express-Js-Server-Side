const express = require('express')
const app = express()
const port = 5000;

const cors = require('cors');
app.use(cors());

const chefs = require('./chefs.json');
const recipes = require('./recipes.json');

app.get('/', (req, res) => {
    res.send('The Chefs Kingdom is running')
})

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.get('/recipes', (req, res) => {
    res.send(recipes)
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)

    const selectedNews = chefs.find(n => n.id === id);
    res.send(selectedNews)
})

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    if (id === 0) {
        res.send(chefs)
    }
    else {
        const chefsRecipes = recipes.filter(n => n.chefs_id === id);
        res.send(chefsRecipes);
    }
})

app.listen(port, () => {
    console.log(`The port number is ${port}`)
})