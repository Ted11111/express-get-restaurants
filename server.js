const express = require("express");
const app = express();
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");

const port = 3000;

//TODO: Create your GET Request Route Below: 
app.use(express.json());

app.delete('/delete/:id', (req, res) => {
    const iD = req.params.id
    res.json(```${sequelize.findByPk(iD)} has been removed from the database.```)
    sequelize.delete({where: {id: iD}})
})

app.post('/restaurants/add/:restaurant', (req, res) => {
    const restaurantAdd = req.body
    res.json(```Restaurant ${restaurantAdd} added to database.```)
    Restaurant.create(restaurantAdd)
})

app.put('/restaurants/update/:id', (req, res) => {
    const restaurantData = req.body
    res.json(``` Restaurant ${restaurantData} updated in database.```)
    Restaurant.update(restaurantData, {where: {id: req.params.id}})
})


app.get('/restaurants', async (req, res) => {
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);
});

app.get('/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id)
    res.json(restaurant)
})



app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})