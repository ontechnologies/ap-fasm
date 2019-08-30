import User from '../controllers/users';
import express from 'express';

const userRouter = express.Router();

userRouter.post('/auth/usersignup', User.create);
userRouter.post('/auth/signin', User.login);


export default userRouter
