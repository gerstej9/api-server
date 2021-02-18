'use strict';

const supertest = require ('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);


describe('testing server for 500 on no ID', () =>{
  it ('should send a 500 status no ID provided', async () => {
    const response = await request.get('/food/noID');
    expect(response.status).toEqual(500);
  })
})

describe('testing server for 500 on no ID', () =>{
  it ('should send a 500 status no ID provided', async () => {
    const response = await request.get('/clothes/noID');
    expect(response.status).toEqual(500);
  })
})

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
    expect(response.body.id).toEqual(1);
    expect(response.body.data.type).toEqual('taco')
  });
});


describe('testing for finding a food by ID', () =>{
  it ('should return a food object if correctly used', async () => {
    const response = await request.get('/food/1');
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
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
    const response = await request.put('/food/1').send({
      type: 'spaghetti',
      cuisine: 'italian'
    });
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
    expect(response.body.data.type).toEqual('spaghetti')
  })
})

describe('testing for deleting a food by ID', () =>{
  it ('should delete a food object if correctly used', async () => {
    const response = await request.delete('/food/1');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual("");
  })
})

describe('testing server for create a cloth', () =>{
  it ('should create a cloth on POST /cloth', async () => {
    const response = await request.post('/clothes').send({
      type: 'vest',
      material: 'polyester'
    });
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
    expect(response.body.data.type).toEqual('vest')
  });
});


describe('testing for finding a cloth by ID', () =>{
  it ('should return a cloth object if correctly used', async () => {
    const response = await request.get('/clothes/1');
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
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
    const response = await request.put('/clothes/1').send({
      type: 'jacket',
      material: 'suede'
    });
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
    expect(response.body.data.type).toEqual('jacket')
  })
})

describe('testing for deleting a cloth by ID', () =>{
  it ('should delete a cloth object if correctly used', async () => {
    const response = await request.delete('/clothes/1');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual("");
  })
})