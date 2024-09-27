import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import morganMiddleware from '@middlewares/morganMiddleware';
import indexRouter from '@routes/indexRouter';
import loggerRouter from '@routes/loggerRouter';

import whatsappClient from '@libs/whatsappClient';

dotenv.config();

whatsappClient.initialize();

const app = express();
const PORT = process.env.port || 5050;

// Используем helmet для безопасности
app.use(helmet());

// Явно указываем источник запросов для CORS
const corsOptions = {
	origin: 'http://localhost:3000', // Разрешаем только с этого источника
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Разрешенные методы
	credentials: true, // Если нужно передавать cookie
	optionsSuccessStatus: 204, // Указываем корректный статус для успешных preflight запросов
};

app.use(cors(corsOptions));

app.use(morganMiddleware);
app.use(express.json());

app.use('/', indexRouter);
app.use('/logger', loggerRouter);

const swaggerOptions = {
	swaggerDefinition: {
		openapi: '3.0.0',
		info: {
			title: 'My Express API',
			version: '1.0.0',
			description: 'API documentation for my Express application',
		},
	},
	apis: ['./src/routes/*.ts'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const server = app.listen(PORT, () => {
	console.log(`server started on port: ${PORT}`);
});

export { app, server };
