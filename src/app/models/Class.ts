import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

import connection from '../../config/db'

mongoose.connect(connection.url)
autoIncrement.initialize(mongoose)

const ClassSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    professor: {
      type: String,
      required: true,
    },
    departamento: {
      type: String,
      required: true,
    },
    qtdCreditos: {
      type: Number,
      required: true,
    },
    codigo: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

ClassSchema.plugin(autoIncrement.plugin, {
  model: 'Class',
  field: 'id',
  startAt: 1,
  incrementBy: 1,
})

export default mongoose.model('Class', ClassSchema)
