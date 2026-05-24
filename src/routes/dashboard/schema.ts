import { z } from 'zod/v4';

export const markRead = z.object({
	id: z.number()
});

export type MarkRead = z.infer<typeof markRead>;

export const deleteTestimonial = z.object({
	id: z.number()
});

export type DeleteTestimonial = z.infer<typeof deleteTestimonial>;
