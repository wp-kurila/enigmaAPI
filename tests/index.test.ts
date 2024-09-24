import { app, server } from '../src';
const request = require('supertest');

describe('POST /', () => {
	afterAll(() => {
		server.close();
	});

	it('should return "Hello from NodeJS"', async () => {
		const res = await request(app).post('/');

		expect(res.statusCode).toEqual(200);

		expect(res.text).toBe('Hello from NodeJS');
	});
});
