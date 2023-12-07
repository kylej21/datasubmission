import { z } from 'zod';

export const createSchema = z.object({
    title: z.string().min(1, 'A title is required!').max(255),
    description: z.string().min(1, 'A description is required!')
});
