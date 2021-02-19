'use strict';

require('@code-fellows/supergoose');

const ModelInterface = require('../src/models/data-collection-class.js');
const FoodModel = require('../src/models/food.js');

const foodController = new ModelInterface(FoodModel);

describe('testing the food model controller', () => {
  it ('should be able to create a valid food model', async () => {
    const newFood = await foodController.create({type: 'fajita', cuisine: 'Mexican'});
    expect(newFood.type).toEqual('fajita');
  });
})