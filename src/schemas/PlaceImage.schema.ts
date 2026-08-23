import { z } from 'zod';

export const createPlaceImageSchema = z.object({
	placeId: z.number().int().positive(),
	imageUrl: z.url('Falha: URL da imagem inválida.'),
	isCover: z.boolean().default(false)
});

export const updatePlaceImageSchema = z.object({
	imageUrl: z.url('Falha: URL da imagem inválida.').optional(),
	isCover: z.boolean().optional()
});

export type CreatePlaceImage = z.infer<typeof createPlaceImageSchema>;
export type UpdatePlaceImage = z.infer<typeof updatePlaceImageSchema>;
