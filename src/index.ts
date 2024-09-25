import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import morganMiddleware from '@middlewares/morganMiddleware';
import indexRouter from '@routes/indexRouter';
import loggerRouter from '@routes/loggerRouter';

dotenv.config();

const app = express();
const PORT = process.env.port || 5050;

// Use Helmet to secure Express app by setting various HTTP headers
app.use(helmet());
// Enable CORS with various options
app.use(cors());

app.use(morganMiddleware);

// Use routes
app.use('/', indexRouter);
app.use('/logger', loggerRouter);
// Swagger configuration options
const swaggerOptions = {
	swaggerDefinition: {
		info: {
			title: 'My Express API',
			version: '1.0.0',
			description: 'API documentation for my Express application',
		},
	},
	apis: ['./src/routes/*.ts'], // Path to the API docs
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const server = app.listen(PORT, () => {
	console.log(`server started on port: ${PORT}`);
});

export { app, server };
