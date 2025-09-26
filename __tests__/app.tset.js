const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
  it('should return Hello CI Pipeline!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/Hello CI Pipeline/i);
  });
});
