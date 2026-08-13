import express from 'express';
import { pinoHttp } from 'pino-http';
import logger from './lib/logger.ts';
import errorHandler from './middlewares/errorHandler.ts';
import userRoute from './routes/user.route.ts';

const app = express();

app.use(pinoHttp({ logger }));

app.use(express.json());

app.use('/users', userRoute);

app.use((_request, response) => {
	response.status(400).json({
		message: 'Page not found!'
	});
});

app.use(errorHandler);

const PORT = Number(process.env.PORT);

app.listen(PORT, () => {
	logger.info(`Sever running on port: http://localhost:${PORT}`);
});
