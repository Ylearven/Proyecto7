const { mongoose } = require('mongoose')
const solistaData = require('../../data/solista.data')
const solistaModel = require('../../data/solista.data')

const solistaSemilla = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://ylegood:61IhtEUISdArhyrJ@cluster0.tpwln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    console.log('Conectado al Mongo')
    for (const data of solistaData) {
      data.Album = data.Album.map((id) => {
        const trimmedId = id.trim()
        if (!mongoose.Types.ObjectId.isValid(trimmedId)) {
          throw new Error('Invalid ObjectId:${trimmedId')
        }
        return new mongoose.Types.ObjectId(trimmedId)
      })
      await solistaModel.updateOne(
        { Nombre: data.Nombre },
        { Imagen: data.Imagen },
        { Debut: data.Debut },
        { $set: data },
        { upsert: true }
      )
    }
    console.log('Datos insertados o actualizados')
  } catch (error) {
    console.log('Error en SolistaSeeds', error)
  } finally {
    await mongoose.disconnect()
    console.log('Desconectado del BBDD')
  }
}
solistaSemilla()
