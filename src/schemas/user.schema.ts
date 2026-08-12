import { z } from 'zod';

export const createUserSchema = z.object({
	name: z.string().min(1),
	email: z.email(),
	phone: z.string().min(1).max(15),
	password: z.string().min(5).max(10)
});
