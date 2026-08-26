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

	longitude: z.number().min(-180).max(180).nullable(),

	phone: z
		.string('Entrada inválida: esperava-se um texto.')
		.regex(/^\d+$/, 'O telefone deve conter apenas números.')
		.min(10, 'Muito curto: esperava-se um texto com ao menos 10 caracteres.')
		.max(15, 'Limite atingido: esperava-se um texto com menos de 15 caracteres')
		.nullable(),
	website: z.url('URL do site inválida..').nullable(),
	instagram: z
		.url('URL do Instagram inválida.')
		.max(
			100,
			'Limite atingido: esperava-se um texto com menos de 100 caracteres'
		)
		.nullable(),
	openingHours: z
		.string('Entrada inválida: esperava-se um texto.')
		.max(
			500,
			'Limite atingido: esperava-se um texto com menos de 500 caracteres'
		)
		.nullable(),
	priceRange: z
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

	longitude: z.number().min(-180).max(180).nullable().optional(),

	phone: z
		.string('Entrada inválida: esperava-se um texto.')
		.regex(/^\d+$/, 'O telefone deve conter apenas números.')
		.min(10, 'Muito curto: esperava-se um texto com ao menos 10 caracteres.')
		.max(15, 'Limite atingido: esperava-se um texto com menos de 15 caracteres')
		.nullable()
		.optional(),
	website: z.url('URL do site inválida.').nullable().optional(),
	instagram: z
		.url('URL do Instagram inválida.')
		.max(
			100,
			'Limite atingido: esperava-se um texto com menos de 100 caracteres'
		)
		.nullable()
		.optional(),
	openingHours: z
		.string('Entrada inválida: esperava-se um texto.')
		.max(
			500,
			'Limite atingido: esperava-se um texto com menos de 500 caracteres'
		)
		.nullable()
		.optional(),
	priceRange: z
		.string('Entrada inválida: esperava-se um texto.')
		.max(50, 'Limite atingido: esperava-se um texto com menos de 50 caracteres')
		.nullable()
		.optional()
});

export type CreatePlace = z.infer<typeof createPlaceSchema>;
export type UpdatePlace = z.infer<typeof updatePlaceSchema>;
