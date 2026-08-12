import type { NextFunction, Request, Response } from 'express';
import { NotFoundError, ValidationError } from '../errors/index.ts';
import logger from '../lib/logger.ts';

export default function errorHandler(
	error: unknown,
	_request: Request,
	response: Response,
	_next: NextFunction
) {
	if (error instanceof NotFoundError) {
		response.status(error.statusCode).json({ message: error.message });
		return;
	}

	if (error instanceof ValidationError) {
		response.status(error.statusCode).json({
			message: error.message,
			fields: error.fields
		});
	}

	logger.error(error);

	response.status(500).json({ message: 'Internal server error.' });
}
