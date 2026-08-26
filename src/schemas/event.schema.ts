import { z } from 'zod';

export const createEventSchema = z.object({
	placeId: z.number().int().positive(),
	categoryId: z.number().int().positive(),
	title: z
		.string('Entrada inválida: esperava-se um texto.')
		.min(1, 'Muito curto: esperava-se um texto com ao menos um caractere.')
		.max(150, 'Muito longo: esperava-se um texto com menos de 150 caracteres.'),
	description: z
		.string('Entrada inválida: esperava-se um texto.')
		.max(
			1000,
			'Muito longo: esperava-se um texto com menos de 1000 caracteres.'
		)
		.nullable(),
	startDate: z.coerce.date(),
	endDate: z.coerce.date().nullable(),
	startTime: z.string('Entrada inválida: esperava-se um texto.').nullable(),
	endTime: z.string('Entrada inválida: esperava-se um texto.').nullable(),
	price: z.coerce.number().nonnegative().nullable()
});

export const updateEventSchema = z.object({
	placeId: z.number().int().positive().optional(),
	categoryId: z.number().int().positive().optional(),
	title: z.string().min(1).max(150).optional(),
	description: z.string().max(1000).nullable().optional(),
	startDate: z.coerce.date().optional(),
	endDate: z.coerce.date().nullable().optional(),
	startTime: z.string().nullable().optional(),
	endTime: z.string().nullable().optional(),
	price: z.coerce.number().nonnegative().nullable().optional()
});

export type CreateEvent = z.infer<typeof createEventSchema>;
export type UpdateEvent = z.infer<typeof updateEventSchema>;
