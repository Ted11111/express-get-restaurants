//Requires neccesary modules
const express = require("express")
const router = express.Router()
//const {check, validationResult} = require("express-validator");

//Requires the database & sequelize connection
const {Restaurant} = require("../models/index");
const {sequelize} = require("../db");

//Parses body data into readable javascript objects
router.use(express.json());
router.use(express.urlencoded({extended:true}));

//POST
router.post("/", async (req, res) => {
    const restaurantData = req.body
    Restaurant.create(restaurantData)
    res.json( await Restaurant.findAll())
})

router.get("/", async (req, res) => {
    res.json(await Restaurant.findAll())
})

router.put("/:id", async (req, res) => {
    const restaurantData = req.body
    await Restaurant.update(restaurantData, {where: {id: req.params.id}})
    res.json(await Restaurant.findAll())
})

router.delete("/:id", async (req, res) => {
    const iD = req.params.id
    await Restaurant.destroy({where: {id: iD}})
    res.json(await Restaurant.findAll())
})

module.exports = router