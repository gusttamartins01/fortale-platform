import express from 'express';
import { pinoHttp } from 'pino-http';
import logger from './lib/logger.ts';
import errorHandler from './middlewares/errorHandler.ts';
import categoryRoute from './routes/category.route.ts';
import eventRouter from './routes/event.route.ts';
import placeRoute from './routes/place.route.ts';
import roleRoute from './routes/role.route.ts';
import userRoute from './routes/user.route.ts';

const app = express();

app.use(pinoHttp({ logger }));

app.use(express.json());

app.use('/roles', roleRoute);
app.use('/users', userRoute);
app.use('/categories', categoryRoute);
app.use('/places', placeRoute);
app.use('/events', eventRouter);

app.use((_request, response) => {
	response.status(404).json({
		message: 'Page not found!'
	});
});

app.use(errorHandler);

const PORT = Number(process.env.PORT);

app.listen(PORT, () => {
	logger.info(`Sever running on port: http://localhost:${PORT}`);
});
