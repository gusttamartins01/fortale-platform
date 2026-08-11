import express from 'express';

const app = express();

app.use(express.json());

app.use('/users', (_request, response) => {
	response.status(200).json({
		message: 'Hello, world!'
	});
});

app.use((_request, response) => {
	response.status(400).json({
		message: 'Page not found!'
	});
});

const PORT = Number(process.env.PORT);

app.listen(PORT, () => {
	console.log(`Sever running on port: http://localhost:${PORT}`);
});
