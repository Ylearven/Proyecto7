const { mongoose } = require('mongoose')
const generoData = require('../../data/genero.data')
const generoModel = require('../../data/genero.data')

const generoSemilla = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://ylegood:61IhtEUISdArhyrJ@cluster0.tpwln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    console.log('Conectado al Mongo')
    for (const data of generoData) {
      data.grupoModel = data.Grupo.map((id) => {
        const trimmedId = id.trim()
        if (!mongoose.Types.ObjectId.isValid(trimmedId)) {
          throw new Error('Invalid ObjectId:${trimmedId}')
        }
        return new mongoose.Types.ObjectId(trimmedId)
      })
      data.solistaModel = data.Solista.map((id) => {
        const trimmedId = id.trim()
        if (!mongoose.Types.ObjectId.isValid(trimmedId)) {
          throw new Error('Invalid ObjectId:${trimmedId')
        }
        return new mongoose.Types.ObjectId(trimmedId)
      })
      await generoModel.updateOne(
        { Nombre: data.Nombre },
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
generoSemilla()
