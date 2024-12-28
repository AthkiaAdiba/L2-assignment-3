import express from 'express';
import { BlogControllers } from './blog.controller';
import validateRequest from '../../middlewares/validateRequest';
import { BlogValidations } from './blog.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  auth('user'),
  validateRequest(BlogValidations.createBlogValidationSchema),
  BlogControllers.createBlog,
);

router.patch(
  '/:id',
  auth('user'),
  validateRequest(BlogValidations.createBlogValidationSchema),
  BlogControllers.updateBlog,
);

router.delete('/:id', auth('user'), BlogControllers.deleteBlog);

export const BlogRoutes = router;
