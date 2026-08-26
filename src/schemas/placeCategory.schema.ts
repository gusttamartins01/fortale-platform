import { z } from 'zod';

export const createPlaceCategorySchema = z.object({
	placeId: z.number().int().positive(),
	categoryId: z.number().int().positive()
});

export type CreatePlaceCategory = z.infer<typeof createPlaceCategorySchema>;
