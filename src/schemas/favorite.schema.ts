import { z } from 'zod';

export const createFavoriteSchema = z.object({
	user_id: z.number().int().positive(),
	place_id: z.number().int().positive()
});

export const updateFavoriteSchema = z.object({
	user_id: z.number().int().positive().optional(),
	place_id: z.number().int().positive().optional()
});

export type CreateFavorite = z.infer<typeof createFavoriteSchema>;
export type UpdateFavorite = z.infer<typeof updateFavoriteSchema>;
