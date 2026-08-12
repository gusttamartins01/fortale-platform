import { z } from 'zod';

export const createUserSchema = z.object({
	name: z
		.string('Entrada inválida: Esperava-se um texto.')
		.min(1, 'Muito curto: esperava-se um texto com ao menos um caractere.'),
	email: z.email('Endereço de e-mail inválido.'),
	phone: z
		.string('Entrada inválida: Esperava-se um texto.')
		.min(1, 'Muito curto: esperava-se um texto com ao menos um caractere.')
		.max(
			15,
			'Limite atingido: esperava-se um texto com menos de 15 caracteres'
		),
	password: z
		.string('Entrada inválida: Esperava-se um texto.')
		.min(5, 'Muito curto: esperava-se um texto com ao menos 5 caracteres.')
		.max(10, 'Limite atingido: esperava-se um texto com menos de 10 caracteres')
});

export const updateUserSchema = z.object({
	name: z
		.string('Entrada inválida: Esperava-se um texto.')
		.min(1, 'Muito curto: esperava-se um texto com ao menos um caractere.')
		.optional(),
	email: z.email('Endereço de e-mail inválido.').optional(),
	phone: z
		.string('Entrada inválida: Esperava-se um texto.')
		.min(1, 'Muito curto: esperava-se um texto com ao menos um caractere.')
		.max(15, 'Limite atingido: esperava-se um texto com menos de 15 caracteres')
		.optional(),
	password: z
		.string('Entrada inválida: Esperava-se um texto.')
		.min(5, 'Muito curto: esperava-se um texto com ao menos 5 caracteres.')
		.max(10, 'Limite atingido: esperava-se um texto com menos de 10 caracteres')
		.optional()
});
