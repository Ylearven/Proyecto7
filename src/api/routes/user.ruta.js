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

userRouter.get('/', isAdmin, isAuth, getUser)
userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.put('/role/:userId', isAdmin, isAuth, updateRolUser)
userRouter.put('/:userId', isAdmin, isAuth, updateUser)
userRouter.delete('/:userId', isAdmin, isAuth, deleteUser)
module.exports = userRouter
