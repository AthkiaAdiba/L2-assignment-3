import jwt, { JwtPayload } from 'jsonwebtoken';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogServices } from './blog.service';
import { StatusCodes } from 'http-status-codes';
import config from '../../config';
import { TBlog } from './blog.interface';

const createBlog = catchAsync(async (req, res) => {
  const RowToken = req.headers.authorization;
  const token = RowToken?.split(' ')[1];
  // console.log(token);

  const decoded = jwt.verify(
    token as string,
    config.jwt_access_secret as string,
  ) as JwtPayload;

  // console.log('decoded', decoded);

  const { userId } = decoded;
  const { title, content } = req.body;

  const blog: TBlog = {
    title,
    content,
    author: userId,
  };

  // create blog
  const result = await BlogServices.createBlogIntoDB(blog);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Blog created successfully!',
    data: result,
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogServices.updateBlogIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog updated successfully!',
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogServices.deleteBlogFromDB(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog deleted successfully!',
    data: result,
  });
});

export const BlogControllers = {
  createBlog,
  updateBlog,
  deleteBlog,
};
