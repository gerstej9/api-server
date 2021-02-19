'use strict';

const express = require('express');
const router = express.Router();


const ModelInterface = require('../models/data-collection-class.js');
const ClothesModel = require('../models/clothes.js')

const clothesController = new ModelInterface(ClothesModel);

router.get('/clothes', allClothes);
router.get('/clothes/:id', getOneCloth);
router.post('/clothes', createCloth);
router.put('/clothes/:id', updateCloth);
router.delete('/clothes/:id', deleteCloth);

async function allClothes(req, res, next){
  let clothesObject = await clothesController.read();
  res.status(200).json(clothesObject);
}

async function getOneCloth(req, res, next){
  const id = req.params.id;
  let clothesObject = await clothesController.read(id);
  res.status(200).json(clothesObject);
}

async function createCloth(req, res, next){
  const clothesObject = req.body;
  let responseObject = await clothesController.create(clothesObject);
  res.status(200).json(responseObject);
}

async function updateCloth(req, res, next){
  const id = req.params.id;
  if(req.body.type && req.body.material){
  const clothesObject = req.body;
  let responseObject = await clothesController.update(id, clothesObject);
  res.status(200).json(responseObject);
  }else{
    next();
  }
}

async function deleteCloth(req, res, next){
  const id = req.params.id;
  let database = await clothesController.destroy(id);
  res.status(200).json(database);
}

module.exports = router;
