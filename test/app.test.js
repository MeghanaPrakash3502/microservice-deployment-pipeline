const request = require('supertest');
const app = require('../app');
// Jenkins Poll SCM Test
describe('GET /', () => {
  it('should return status 200 and a message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Microservice is running successfully!');
  });
});

describe('GET /health', () => {
  it('should return UP status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('UP');
  });
});