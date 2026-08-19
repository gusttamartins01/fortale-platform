import { z } from 'zod';

export const createPlaceSchema = z.object({
	name: z
		.string('Entrada inválida: esperava-se um texto.')
		.min(1, 'Muito curto: esperava-se um texto com ao menos um caractere.')
		.max(
			100,
			'Limite atingido: esperava-se um texto com menos de 100 caracteres'
		),
	description: z
		.string('Entrada inválida: esperava-se um texto.')
		.max(
			1000,
			'Limite atingido: esperava-se um texto com menos de 1000 caracteres'
		)
		.nullable(),
	address: z
		.string('Entrada inválida: esperava-se um texto.')
		.max(
			255,
			'Limite atingido: esperava-se um texto com menos de 255 caracteres'
		)
		.nullable(),
	neighborhood: z
		.string('Entrada inválida: esperava-se um texto.')
		.max(
			100,
			'Limite atingido: esperava-se um texto com menos de 100 caracteres'
		)
		.nullable(),

	latitude: z.number().min(-90).max(90).nullable(),

	longitude: z.number().min(-100).max(100).nullable(),

	phone: z
		.string('Entrada inválida: esperava-se um texto.')
		.min(9, 'Muito curto: esperava-se um texto com ao menos 9 caracteres.')
		.max(15, 'Limite atingido: esperava-se um texto com menos de 15 caracteres')
		.nullable(),
	website: z.string('Entrada inválida: esperava-se um texto.').nullable(),
	instagram: z
		.string('Entrada inválida: esperava-se um texto.')
		.max(
			100,
			'Limite atingido: esperava-se um texto com menos de 100 caracteres'
		)
		.nullable(),
	opening_hours: z
		.string('Entrada inválida: esperava-se um texto.')
		.max(
			500,
			'Limite atingido: esperava-se um texto com menos de 500 caracteres'
		)
		.nullable(),
	price_ranger: z
		.string('Entrada inválida: esperava-se um texto.')
		.max(50, 'Limite atingido: esperava-se um texto com menos de 50 caracteres')
		.nullable()
});

export const updatePlaceSchema = z.object({
	name: z
		.string('Entrada inválida: esperava-se um texto.')
		.min(1, 'Muito curto: esperava-se um texto com ao menos um caractere.')
		.max(
			100,
			'Limite atingido: esperava-se um texto com menos de 100 caracteres'
		)
		.optional(),
	description: z
		.string('Entrada inválida: esperava-se um texto.')
		.max(
			1000,
			'Limite atingido: esperava-se um texto com menos de 1000 caracteres'
		)
		.nullable()
		.optional(),
	address: z
		.string('Entrada inválida: esperava-se um texto.')
		.max(
			255,
			'Limite atingido: esperava-se um texto com menos de 255 caracteres'
		)
		.nullable()
		.optional(),
	neighborhood: z
		.string('Entrada inválida: esperava-se um texto.')
		.max(
			100,
			'Limite atingido: esperava-se um texto com menos de 100 caracteres'
		)
		.nullable()
		.optional(),

	latitude: z.number().min(-90).max(90).nullable().optional(),

	longitude: z.number().min(-100).max(100).nullable().optional(),

	phone: z
		.string('Entrada inválida: esperava-se um texto.')
		.min(9, 'Muito curto: esperava-se um texto com ao menos 9 caracteres.')
		.max(15, 'Limite atingido: esperava-se um texto com menos de 15 caracteres')
		.nullable()
		.optional(),
	website: z
		.string('Entrada inválida: esperava-se um texto.')
		.nullable()
		.optional(),
	instagram: z
		.string('Entrada inválida: esperava-se um texto.')
		.max(
			100,
			'Limite atingido: esperava-se um texto com menos de 100 caracteres'
		)
		.nullable()
		.optional(),
	opening_hours: z
		.string('Entrada inválida: esperava-se um texto.')
		.max(
			500,
			'Limite atingido: esperava-se um texto com menos de 500 caracteres'
		)
		.nullable()
		.optional(),
	price_ranger: z
		.string('Entrada inválida: esperava-se um texto.')
		.max(50, 'Limite atingido: esperava-se um texto com menos de 50 caracteres')
		.nullable()
		.optional()
});

export type CreatePlace = z.infer<typeof createPlaceSchema>;
export type UpdatePlace = z.infer<typeof updatePlaceSchema>;
