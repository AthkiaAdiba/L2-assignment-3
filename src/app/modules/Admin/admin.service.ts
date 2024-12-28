import { User } from '../Auth/auth.model';
import { Blog } from '../Blog/blog.model';

const blockUserFromDB = async (id: string) => {
  await User.findByIdAndUpdate(id, { isBlocked: true }, { new: true });
};

const deleteBlogFromDB = async (id: string) => {
  await Blog.findByIdAndDelete(id);
};

export const AdminServices = {
  blockUserFromDB,
  deleteBlogFromDB,
};
