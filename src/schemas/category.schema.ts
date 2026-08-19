import { z } from 'zod';

export const createCategorySchema = z.object({
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
			500,
			'Limite atingido: esperava-se um texto com menos de 500 caracteres'
		)
		.nullable()
});

export const updateCategorySchema = z.object({
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
			500,
			'Limite atingido: esperava-se um texto com menos de 500 caracteres'
		)
		.nullable()
		.optional()
});

export type CreateCategory = z.infer<typeof createCategorySchema>;
export type UpdateCategory = z.infer<typeof updateCategorySchema>;
