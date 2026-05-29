require('dotenv').config()
const express = require('express')
const cors = require('cors')

const { connectDB } = require('./src/config/db')

const albumRouter = require('./src/api/routes/album.ruta')
const generoRouter = require('./src/api/routes/genero.ruta')
const grupoRouter = require('./src/api/routes/grupo.ruta')
const solistaRouter = require('./src/api/routes/solista.ruta')
const userRouter = require('./src/api/routes/user.ruta')
const app = express()

app.use(express.json())
app.use(cors())
connectDB()

app.use('/api/v1/album', albumRouter)
app.use('/api/v1/genero', generoRouter)
app.use('/api/v1/grupo', grupoRouter)
app.use('/api/v1/solista', solistaRouter)
app.use('/api/v1/users', userRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})
app.listen(3000, () => {
  console.log('Servidor levantado en: http://localhost:3000')
})
