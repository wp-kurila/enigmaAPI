import express, { Request, Response } from 'express';

const app = express();
const PORT = 5050;

app.post('/', (req: Request, res: Response) => {
	res.send('Hello from NodeJS');
});

const server = app.listen(PORT, () => {
	console.log(`server started on port: ${PORT}`);
});

hello;
1123;
33;

export { app, server };
