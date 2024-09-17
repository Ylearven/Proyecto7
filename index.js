require('dotenv').config()
const express = require('express')

const { connectDB } = require('./src/config/db')

const albumRouter = require('./src/api/routes/album.ruta')
const generoRouter = require('./src/api/routes/genero.ruta')
const grupoRouter = require('./src/api/routes/grupo.ruta')
const solistaRouter = require('./src/api/routes/solista.ruta')

const userRouter = require('./src/api/routes/user.ruta')

const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())
connectDB()

app.use('/api/v1/albumRouter', albumRouter)
app.use('/api/v1/generoRouter', generoRouter)
app.use('/api/v1/grupoRouter', grupoRouter)
app.use('/api/v1/solistaRouter', solistaRouter)
app.use('/api/v1/userRouter', userRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})
app.listen(3000, () => {
  console.log('Servidor levantado en: http://localhost:3000')
})
