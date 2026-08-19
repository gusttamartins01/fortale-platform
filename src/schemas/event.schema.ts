import { z } from 'zod';

export const createEventSchema = z.object({
	place_id: z.number().int().positive(),
	category_id: z.number().int().positive(),
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
	start_date: z.coerce.date(),
	end_date: z.coerce.date(),
	start_time: z.string('Entrada inválida: esperava-se um texto').nullable(),
	end_time: z.string('Entrada inválida: esperava-se um texto.').nullable(),
	price: z.number().nonnegative().nullable()
});

export const updateEventSchema = z.object({
	place_id: z.number().int().positive().optional(),
	category_id: z.number().int().positive().optional(),
	title: z.string().min(1).max(150).optional(),
	description: z.string().max(1000).nullable().optional(),
	start_date: z.coerce.date().optional(),
	end_date: z.coerce.date().optional(),
	start_time: z.string().nullable().optional(),
	end_time: z.string().nullable().optional(),
	price: z.number().nonnegative().nullable().optional()
});

export type CreateEvent = z.infer<typeof createEventSchema>;
export type UpdateEvent = z.infer<typeof updateEventSchema>;
