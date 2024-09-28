import { app, server } from '../src';
import request from 'supertest';

jest.mock('../src/libs/whatsappClient', () => ({
	initialize: jest.fn(),
}));

describe('POST /', () => {
	afterAll(() => {
		server.close();
	});

	it('should return error', async () => {
		const res = await request(app).post('/');

		expect(res.statusCode).toEqual(400);

		expect(res.text).toBe(
			'{"errors":["Name is required","Phone is required","Phone must be a valid number","Phone must be between 10 and 15 digits"]}',
		);
	});
});
