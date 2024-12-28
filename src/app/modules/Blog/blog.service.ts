import QueryBuilder from '../../builder/QueryBuilder';
import { BlogSearchableFields } from './blog.constant';
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

const getAllBlogsFromDB = async (query: Record<string, unknown>) => {
  console.log(query);
  const blogQuery = new QueryBuilder(
    Blog.find()
      .populate('author')
      .select('-isPublished -createdAt -updatedAt -__v'),
    query,
  )
    .search(BlogSearchableFields)
    .filter();

  const result = await blogQuery.modelQuery;

  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  updateBlogIntoDB,
  deleteBlogFromDB,
  getAllBlogsFromDB,
};
