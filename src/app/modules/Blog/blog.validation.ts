import { z } from 'zod';

const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    content: z.string(),
    author: z.string().optional(),
    isPublished: z.boolean().optional(),
  }),
});

const updateValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    author: z.string().optional(),
    isPublished: z.boolean().optional(),
  }),
});

export const BlogValidations = {
  createBlogValidationSchema,
  updateValidationSchema,
};
