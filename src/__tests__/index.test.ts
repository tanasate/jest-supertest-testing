import request from 'supertest';
import app from '../index';

describe('App', () => {
    it('should return "Hello, world!"', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello, world!');
    });
});
