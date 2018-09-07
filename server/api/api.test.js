const request = require('supertest');
const app = require('../app');

describe('api', () => {
  describe('"/api" routes', () => {
    it('should provide a standard response', done => {
      request(app)
        .get('/api/ping')
        .expect(200)
        .expect('Content-Type', /application\/json/, done);
    });
  });
});
