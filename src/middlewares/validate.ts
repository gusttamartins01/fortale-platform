import type { NextFunction, Request, Response } from 'express';
import type { ZodType } from 'zod';
import { ValidationError } from '../errors/index.ts';

export default function validate(schema: ZodType) {
	return (request: Request, _response: Response, next: NextFunction) => {
		const result = schema.safeParse(request.body);

		if (!result.success) {
			const fields = result.error.issues.map((issue) => ({
				field: issue.path.join(''),
				message: issue.message
			}));

			return next(new ValidationError('invalid data', fields));
		}

		request.body = result.data;
		next();
	};
}
