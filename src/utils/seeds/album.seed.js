const albumData = require('../../data/album.data')
const albumModel = require('../../api/models/album.modelo')
const mongoose = require('mongoose')
const albumSemilla = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://ylegood:61IhtEUISdArhyrJ@cluster0.tpwln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    console.log('conectado a Mongo')
    for (const data of albumData) {
      await albumData.updateOne(
        { Nombre: data.Nombre },
        { Lanzamiento: data.Lanzamiento },
        { $set: data },
        { upsert: true }
      )
    }
    console.log('Datos insertados o actualizados')
  } catch (error) {
    console.log('Error en AlbumSeeds', error)
  } finally {
    await mongoose.disconnect()
    console.log('Desconectado de la BBDD')
  }
}
albumSemilla()
