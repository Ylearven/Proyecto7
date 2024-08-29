const { mongoose } = require('mongoose')
const albumData = require('../../data/album.data')
const albumModel = require('../../data/album.data')

const albumSemilla = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://ylegood:61IhtEUISdArhyrJ@cluster0.tpwln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    console.log('Conectado al Mongo')
    for (const data of albumData) {
      await albumModel.updateOne(
        { Nombre: data.Nombre },
        { Imagen: data.Imagen },
        { Lanzamineto: data.Lanzamiento },
        { $set: data },
        { upsert: true }
      )
    }
    console.log('Datos insertados o actualizados')
  } catch (error) {
    console.log('Error en AlbumSeeds', error)
  } finally {
    await mongoose.disconnect()
    console.log('Desconectado del BBDD')
  }
}
albumSemilla()
