const userRouter = require('express').Router()
const { isAdmin, isAuth } = require('../../middlewares/auth')
const {
  getUser,
  registerUser,
  loginUser,
  updateRolUser,
  updateUser,
  deleteUser
} = require('../controllers/users.controlador')

userRouter.get('/', isAuth, isAdmin, getUser)
userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.put('/role/:userId', isAuth, isAdmin, updateRolUser)
userRouter.put('/:userId', isAuth, updateUser)
userRouter.delete('/:userId', isAuth, deleteUser)
module.exports = userRouter
