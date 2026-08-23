import { z } from 'zod';

export const createPlaceCategorySchema = z.object({
	placeId: z.number().int().positive(),
	categoryId: z.number().int().positive()
});

export const updatePlaceCategorySchema = z.object({
	placeId: z.number().int().positive().optional(),
	categoryId: z.number().int().positive().optional()
});

export type CreatePlaceCategory = z.infer<typeof createPlaceCategorySchema>;
export type UpdatePlaceCategorty = z.infer<typeof updatePlaceCategorySchema>;
