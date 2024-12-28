import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (payload: TBlog) => {
  const createdBlog = await Blog.create(payload);
  const result = await Blog.findById(createdBlog._id)
    .populate('author')
    .select('-isPublished -createdAt -updatedAt -__v');

  return result;
};

const updateBlogIntoDB = async (id: string, payload: Partial<TBlog>) => {
  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
    .populate('author')
    .select('-isPublished -createdAt -updatedAt -__v');

  return result;
};

const deleteBlogFromDB = async (id: string) => {
  await Blog.findByIdAndDelete(id);
};

export const BlogServices = {
  createBlogIntoDB,
  updateBlogIntoDB,
  deleteBlogFromDB,
};
