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
  // console.log(query);
  const queryObj = { ...query }; // copy

  const blogSearchableFields = ['title', 'content'];

  let search = '';

  if (query?.search) {
    search = query?.search as string;
  }

  const searchQuery = Blog.find({
    $or: blogSearchableFields.map((field) => ({
      [field]: { $regex: search, $options: 'i' },
    })),
  });

  // Filtering
  const excludeFields = ['search', 'sortBy', 'sortOrder'];
  excludeFields.forEach((el) => delete queryObj[el]);
  // console.log(query, queryObj);

  const filterQuery = searchQuery
    .find(queryObj)
    .populate('author')
    .select('-isPublished -createdAt -updatedAt -__v');

  let sortBy = '-createdAt';

  if (query.sortOrder === 'desc') {
    sortBy = `-${query.sortBy as string}`;
  } else if (query.sortOrder === 'asc') {
    sortBy = query.sortBy as string;
  }

  const sortQuery = await filterQuery.sort(sortBy);

  return sortQuery;
};

export const BlogServices = {
  createBlogIntoDB,
  updateBlogIntoDB,
  deleteBlogFromDB,
  getAllBlogsFromDB,
};
