/* eslint-disable no-undef */
const { expect } = require('chai');
const app = require('../src/app');

describe('People Endpoints', () => {
  it('GET /people responds with 200 containing list of people in line to adopt', () => {
    return supertest(app).get('/api/people').expect(200)
      .then(res => {
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.greaterThan(0);
      });
  });
  it('POST /people adds new person name to list of people in line to adopt', () => {
    let newP = { name : 'Felicia Bai' };
    return supertest(app).post('/api/people').expect(201)
      .send(newP)
      .then(res => {
        expect(res.body).to.be.a('string');
        expect(res.body).to.eql(newP.name);
      });
  });
});