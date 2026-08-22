import { z } from 'zod';

export const createPlaceCategeorySchema = z.object({
	place_id: z.number().int().positive(),
	category_id: z.number().int().positive()
});

export const updatePlaceCategeorySchema = z.object({
	place_id: z.number().int().positive().optional(),
	category_id: z.number().int().positive().optional()
});

export type CreatePlaceCategory = z.infer<typeof createPlaceCategeorySchema>;
export type UpdatePlaceCategorty = z.infer<typeof updatePlaceCategeorySchema>;
