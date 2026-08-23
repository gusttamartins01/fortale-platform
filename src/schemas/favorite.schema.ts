import { z } from 'zod';

export const createFavoriteSchema = z.object({
	userId: z.number().int().positive(),
	placeId: z.number().int().positive()
});

export type CreateFavorite = z.infer<typeof createFavoriteSchema>;
