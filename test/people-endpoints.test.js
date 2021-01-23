/* eslint-disable no-undef */
const { expect } = require('chai');
const app = require('../src/app');

describe.only('People Endpoints', () => {
  it('GET /people responds with 200 containing list of people in line to adopt', () => {
    return supertest(app).get('/api/people').expect(200)
      .then(res => {
        console.log(res.body);
        expect(res.body).to.be.an('array');
      });
  });
  it('POST /people adds new person name to list of people in line to adopt', () => {
    let newP = {name : 'Felicia Bai'};
    return supertest(app).post('/api/people').expect(201)
      .send(newP)
      .then(res => {
        console.log(res.body);
        expect(res.body).to.be.a('string');
        expect(res.body).to.eql(newP.name);
      });
  });
});