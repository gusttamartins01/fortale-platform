import { z } from 'zod';

export const createRoleSchema = z.object({
	name: z
		.string('Entrada inválida: esperava-se um texto.')
		.min(1, 'Muito curto: esperava-se um texto com ao menos um caractere.')
		.max(50, 'Limite atingido: esperava-se um texto com menos de 50 caracteres')
});

export const updateRoleSchema = z.object({
	name: z
		.string('Entrada inválida: esperava-se um texto.')
		.min(1, 'Muito curto: esperava-se um texto com ao menos um caractere.')
		.max(
			50,
			'Limite atingido: esperava-se um texto com menos de 100 caracteres'
		)
		.optional()
});

export type CreateRole = z.infer<typeof createRoleSchema>;
export type UpdateRole = z.infer<typeof updateRoleSchema>;
