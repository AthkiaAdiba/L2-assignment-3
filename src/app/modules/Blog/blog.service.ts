import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (payload: TBlog) => {
  const createdBlog = await Blog.create(payload);
  const result = await Blog.findById(createdBlog._id)
    .populate('author')
    .select('-isPublished -createdAt -updatedAt -__v');

  return result;
};

export const BlogServices = {
  createBlogIntoDB,
};
