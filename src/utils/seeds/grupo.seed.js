const { mongoose } = require('mongoose')
const grupoData = require('../../data/grupo.data')
const grupoModel = require('../../data/grupo.data')

const grupoSemilla = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://ylegood:61IhtEUISdArhyrJ@cluster0.tpwln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    console.log('Conectado al Mongo')
    for (const data of grupoData) {
      data.albumModel = data.Album.map((id) => {
        const trimmedId = id.trim()
        if (!mongoose.Types.ObjectId.isValid(trimmedId)) {
          throw new Error('Invalid ObjectId:${trimmedId')
        }
        return new mongoose.Types.ObjectId(trimmedId)
      })
      await grupoModel.updateOne(
        { Nombre: data.Nombre },
        { Imagen: data.Imagen },
        { Componentes: data.Componentes },
        { Debut: data.Debut },
        { $set: data },
        { upsert: true }
      )
    }
    console.log('Datos insertados o actualizados')
  } catch (error) {
    console.log('Error en GrupoSeeds', error)
  } finally {
    await mongoose.disconnect()
    console.log('Desconectado del BBDD')
  }
}
grupoSemilla()
