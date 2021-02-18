const { response } = require('express');
const express = require('express');
const router = express.Router();

const validator = require ('../middleware/validator.js');

const Clothes = require('../models/clothes.js');
const cloth = new Clothes();

router.get('/clothes', allClothes);
router.get('/clothes/:id', validator, getOneCloth);
router.post('/clothes', createCloth);
router.put('/clothes/:id', validator, updateCloth);
router.delete('/clothes/:id', validator, deleteCloth);

function allClothes(req, res, next){
  let clothesObject = cloth.read();
  res.status(200).json(clothesObject);
}

function getOneCloth(req, res, next){
  const id = Number(req.params.id);
  let clothesObject = cloth.read(id);
  res.status(200).json(clothesObject);
}

function createCloth(req, res, next){
  const clothesObject = req.body;
  let responseObject = cloth.create(clothesObject);
  res.status(200).json(responseObject);
}

function updateCloth(req, res, next){
  const id = Number(req.params.id);
  if(req.body.type && req.body.material){
    const clothesObject = req.body;
    let responseObject = cloth.update(id, clothesObject);
    res.status(200).json(responseObject);
  }else{
    next();
  }
}

function deleteCloth(req, res, next){
  const id = Number(req.params.id);
  let database = cloth.destroy(id);
  res.status(200).json(database);
}

module.exports = router;
