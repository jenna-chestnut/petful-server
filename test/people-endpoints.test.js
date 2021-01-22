const app = require('../src/app');

describe('People /Get', () => {
  it('GET /people responds with 200 containing list of people in line to adopt', () => {
    return supertest(app).get('/api/people').expect(200)
      .then(res => {
        console.log(res);
      });
  });
});