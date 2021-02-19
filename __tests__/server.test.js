'use strict';

require('@code-fellows/supergoose');
const { response } = require('express');
const supertest = require ('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);


describe('testing server for 404 on bad route', () =>{
  it ('should send a 404 status route does not exist', async () => {
    const response = await request.get('/scooby');
    expect(response.status).toEqual(404);
  })
})

describe('testing server for 404 on bad method', () =>{
  it ('should send a 404 status request method is invalid', async () => {
    const response = await request.post('/clothes/5');
    expect(response.status).toEqual(404);
  })
})


describe('testing server for create a food', () =>{
  it ('should create a food on POST /food', async () => {
    const response = await request.post('/food').send({
      type: 'taco',
      cuisine: 'Mexican'
    });
    expect(response.status).toEqual(200);
    expect(response.body._id).toBeDefined();
    expect(response.body.type).toEqual('taco')
  });
});


describe('testing for finding a food by ID', () =>{
  it ('should return a food object if correctly used', async () => {
    const response = await request.post('/food').send({
      type: 'spaghetti',
      cuisine: 'Italian'
    });
    const findResponse = await request.get(`/food/${response.body._id}`);
    expect(findResponse.status).toEqual(200);
    expect(findResponse.body[0]._id).toEqual(response.body._id);
  })
})

describe('testing for retrieving food database', () =>{
  it ('should return a food array if correctly used', async () => {
    const response = await request.get('/food');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toEqual(true);
  })
})

describe('testing for updating a food by ID', () =>{
  it ('should update a food object if correctly used', async () => {
    const response = await request.post('/food').send({
      type: 'ramen',
      cuisine: 'Japanese'
    });
    const updateResponse = await request.put(`/food/${response.body._id}`).send({
      type: 'spaghetti',
      cuisine: 'italian'
    });
    expect(updateResponse.status).toEqual(200);
    expect(updateResponse.body._id).toEqual(response.body._id);
    const findResponse = await request.get(`/food/${response.body._id}`);
    expect(findResponse.body[0].type).toEqual('spaghetti');
  })
})

describe('testing for deleting a food by ID', () =>{
  it ('should delete a food object if correctly used', async () => {
    const response = await request.post('/food').send({
      type: 'gyro',
      cuisine: 'Turkish'
    });
    const deleteResponse = await request.delete(`/food/${response.body._id}`);
    expect(deleteResponse.status).toEqual(200);
    expect(deleteResponse.body.type).toEqual("gyro");
    expect(deleteResponse.body.cuisine).toEqual("Turkish");
  })
})

describe('testing server for create clothes', () =>{
  it ('should create a food on POST /clothes', async () => {
    const response = await request.post('/clothes').send({
      type: 'jacket',
      material: 'leather'
    });
    expect(response.status).toEqual(200);
    expect(response.body._id).toBeDefined();
    expect(response.body.type).toEqual('jacket')
  });
});


describe('testing for finding a cloth by ID', () =>{
  it ('should return a clothing object if correctly used', async () => {
    const response = await request.post('/clothes').send({
      type: 'shoes',
      material: 'suede'
    });
    const findResponse = await request.get(`/clothes/${response.body._id}`);
    expect(findResponse.status).toEqual(200);
    expect(findResponse.body[0]._id).toEqual(response.body._id);
  })
})

describe('testing for retrieving clothes database', () =>{
  it ('should return a clothes array if correctly used', async () => {
    const response = await request.get('/clothes');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toEqual(true);
  })
})

describe('testing for updating a cloth by ID', () =>{
  it ('should update a cloth object if correctly used', async () => {
    const response = await request.post('/clothes').send({
      type: 'pants',
      material: 'denim'
    });
    const updateResponse = await request.put(`/clothes/${response.body._id}`).send({
      type: 'shoes',
      material: 'canvas'
    });
    expect(updateResponse.status).toEqual(200);
    expect(updateResponse.body._id).toEqual(response.body._id);
    const findResponse = await request.get(`/clothes/${response.body._id}`);
    expect(findResponse.body[0].type).toEqual('shoes');
  })
})

describe('testing for deleting a food by ID', () =>{
  it ('should delete a food object if correctly used', async () => {
    const response = await request.post('/clothes').send({
      type: 'sweater',
      material: 'cashmere'
    });
    const deleteResponse = await request.delete(`/clothes/${response.body._id}`);
    expect(deleteResponse.status).toEqual(200);
    expect(deleteResponse.body.type).toEqual("sweater");
    expect(deleteResponse.body.material).toEqual("cashmere");
  })
})