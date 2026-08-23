import { z } from 'zod';

export const createUserSchema = z.object({
	name: z
		.string('Entrada inválida: esperava-se um texto.')
		.min(1, 'Muito curto: esperava-se um texto com ao menos um caractere.'),
	email: z.email('Endereço de e-mail inválido.'),
	phone: z
		.string('Entrada inválida: esperava-se um texto.')
		.min(1, 'Muito curto: esperava-se um texto com ao menos um caractere.')
		.max(15, 'Limite atingido: esperava-se um texto com menos de 15 caracteres')
		.nullable(),
	password: z
		.string('Entrada inválida: esperava-se um texto.')
		.min(8, 'Muito curto: esperava-se um texto com ao menos 8 caracteres.')
		.max(
			100,
			'Limite atingido: esperava-se um texto com menos de 100 caracteres'
		)
	// roleId: z.number().int().positive()
});

export const updateUserSchema = z.object({
	name: z
		.string('Entrada inválida: esperava-se um texto.')
		.min(1, 'Muito curto: esperava-se um texto com ao menos um caractere.')
		.optional(),
	email: z.email('Endereço de e-mail inválido.').optional(),
	phone: z
		.string('Entrada inválida: esperava-se um texto.')
		.min(1, 'Muito curto: esperava-se um texto com ao menos um caractere.')
		.max(15, 'Limite atingido: esperava-se um texto com menos de 15 caracteres')
		.nullable()
		.optional(),
	password: z
		.string('Entrada inválida: esperava-se um texto.')
		.min(8, 'Muito curto: esperava-se um texto com ao menos 8 caracteres.')
		.max(
			100,
			'Limite atingido: esperava-se um texto com menos de 100 caracteres'
		)
		.optional()
});

export type CreateUser = z.infer<typeof createUserSchema>;
export type UpdateUser = z.infer<typeof updateUserSchema>;
