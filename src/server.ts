import express from 'express';
import { pinoHttp } from 'pino-http';
import logger from './lib/logger.ts';
import errorHandler from './middlewares/errorHandler.ts';
import categoryRoute from './routes/category.route.ts';
import eventRouter from './routes/event.route.ts';
import favoriteRouter from './routes/favorite.route.ts';
import placeRoute from './routes/place.route.ts';
import placeCategoryRouter from './routes/placeCategory.route.ts';
import roleRoute from './routes/role.route.ts';
import userRoute from './routes/user.route.ts';

const app = express();

app.use(pinoHttp({ logger }));

app.use(express.json());

app.use('/roles', roleRoute);
app.use('/users', userRoute);
app.use('/categories', categoryRoute);
app.use('/places', placeRoute);
app.use('/place-categories', placeCategoryRouter);
app.use('/events', eventRouter);
app.use('/favorites', favoriteRouter);

app.use((_request, response) => {
	response.status(404).json({
		message: 'Page not found!'
	});
});

app.use(errorHandler);

const PORT = Number(process.env.PORT);

app.listen(PORT, () => {
	logger.info(`Server running on port: http://localhost:${PORT}`);
});
