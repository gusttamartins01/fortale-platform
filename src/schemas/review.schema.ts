import { z } from 'zod';

export const createReviewSchema = z.object({
	userId: z.number().int().positive(),
	placeId: z.number().int().positive(),
	rating: z
		.number()
		.int('Entrada inválida: esperava-se um número.')
		.min(1, 'Muito curto: a avaliação miníma esperada é 1.')
		.max(10, 'Muito longo: a avaliação máxima esperada é 10.'),
	comment: z
		.string()
		.max(1000, 'Muito longo: esperava-se um texto com menos de 1000 caracteres')
		.nullable()
});

export const updateReviewSchema = z.object({
	rating: z
		.number()
		.int('Entrada inválida: esperava-se um número.')
		.min(1, 'Muito curto: a avaliação miníma esperada é 1.')
		.max(10, 'Muito longo: a avaliação máxima esperada é 10.')
		.optional(),
	comment: z
		.string()
		.max(1000, 'Muito longo: esperava-se um texto com menos de 1000 caracteres')
		.nullable()
		.optional()
});

export type CreateReview = z.infer<typeof createReviewSchema>;
export type UpdateReview = z.infer<typeof updateReviewSchema>;
