'use strict';

const express = require('express');
const router = express.Router();

const ModelInterface = require('../models/data-collection-class.js');
const FoodModel = require('../models/food.js');

const foodController = new ModelInterface(FoodModel);

router.get('/food', allFoods);
router.get('/food/:id', getOneFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

async function allFoods(req, res, next){
  let foodObject = await foodController.read();
  res.status(200).json(foodObject);
}

async function getOneFood(req, res, next){
  const id = req.params.id;
  let foodObject = await foodController.read(id);
  res.status(200).json(foodObject);
}

async function createFood(req, res, next){
  const foodObject = req.body;
  let responseObject = await foodController.create(foodObject);
  res.status(200).json(responseObject);
}

async function updateFood(req, res, next){
  const id = req.params.id;
  if(req.body.type && req.body.cuisine){

  const foodObject = req.body;
  let responseObject = await foodController.update(id, foodObject);
  res.status(200).json(responseObject);
  }else{
    next();
  }
}

async function deleteFood(req, res, next){
  const id = req.params.id;
  let database = await foodController.destroy(id);
  res.status(200).json(database);
}

module.exports = router;
