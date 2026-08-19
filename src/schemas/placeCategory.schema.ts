import { z } from 'zod';

export const createPlaceCatgeorySchema = z.object({
	place_id: z.number().int().positive(),
	category_id: z.number().int().positive()
});

export const updatePlaceCatgeorySchema = z.object({
	place_id: z.number().int().positive().optional(),
	category_id: z.number().int().positive().optional()
});

export type CreatePlaceCategory = z.infer<typeof createPlaceCatgeorySchema>;
export type UpdatePlaceCategorty = z.infer<typeof updatePlaceCatgeorySchema>;
