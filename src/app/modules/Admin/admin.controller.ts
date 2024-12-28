import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AdminServices } from './admin.service';
import { StatusCodes } from 'http-status-codes';

const blockUser = catchAsync(async (req, res) => {
  const { userId } = req.params;

  const result = await AdminServices.blockUserFromDB(userId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User blocked successfully!',
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AdminServices.deleteBlogFromDB(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog deleted successfully!',
    data: result,
  });
});

export const AdminControllers = {
  blockUser,
  deleteBlog,
};
