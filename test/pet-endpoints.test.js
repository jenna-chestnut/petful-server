/* eslint-disable no-undef */
const { expect } = require('chai');
const app = require('../src/app');

describe('Pet Endpoints', () => {
  it('GET /pet responds with 200 containing next pets in line to adopt (1 cat, 1 dog)', () => {
    return supertest(app).get('/api/pets').expect(200)
      .then(res => {
        expect(res.body).to.be.an('object');
        expect(res.body.cat).to.be.an('object');
        expect(res.body.dog).to.be.an('object');
      });
  });
  it('DELETE /pet removes selected pet from line and their owner, returning the new family!', () => {
    return supertest(app).delete('/api/pets/cat')
      .expect(200)
      .then(res => {
        expect(res.body).to.be.an('object');
        expect(res.body.pet).to.be.an('object');
        expect(res.body.owner).to.be.a('string');
      });
  });
});