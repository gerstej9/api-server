const { response } = require('express');
const express = require('express');
const router = express.Router();

const validator = require ('../middleware/validator.js');

const Foods = require('../models/food.js');
const food = new Foods();

router.get('/food', allFoods);
router.get('/food/:id', validator, getOneFood);
router.post('/food', createFood);
router.put('/food/:id', validator, updateFood);
router.delete('/food/:id', validator, deleteFood);

function allFoods(req, res, next){
  let foodObject = food.read();
  res.status(200).json(foodObject);
}

function getOneFood(req, res, next){
  const id = Number(req.params.id);
  let foodObject = food.read(id);
  res.status(200).json(foodObject);
}

function createFood(req, res, next){
  const foodObject = req.body;
  let responseObject = food.create(foodObject);
  res.status(200).json(responseObject);
}

function updateFood(req, res, next){
  const id = Number(req.params.id);
  if(req.body.type && req.body.cuisine){

  const foodObject = req.body;
  let responseObject = food.update(id, foodObject);
  res.status(200).json(responseObject);
  }else{
    next();
  }
}

function deleteFood(req, res, next){
  const id = Number(req.params.id);
  let database = food.destroy(id);
  res.status(200).json(database);
}

module.exports = router;
