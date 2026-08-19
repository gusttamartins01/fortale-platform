import { z } from 'zod';

export const createPlaceImageSchema = z.object({
	place_id: z.number().int().positive(),
	url: z.url('Falha: URL da imagem inválida.'),
	is_cover: z.boolean().default(false)
});

export const updatePlaceImageSchema = z.object({
	url: z.url('Falha: URL da imagem inválida.').optional(),
	is_cover: z.boolean().optional()
});

export type CreatePlaceImage = z.infer<typeof createPlaceImageSchema>;
export type UpdatePlaceImage = z.infer<typeof updatePlaceImageSchema>;
