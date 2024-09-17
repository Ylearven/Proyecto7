const { isAuth } = require('../../middlewares/auth')
const {
  getUser,
  registerUser,
  loginUser
} = require('../controllers/users.controlador')
const userRouter = require('express').Router()

userRouter.get('/', [isAuth], getUser)
userRouter.post('/registerUser', registerUser)
userRouter.post('/loginUser', loginUser)
module.exports = userRouter
