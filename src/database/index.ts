import mongoose, { Mongoose } from 'mongoose'

import connection from '../config/db'

class Database {
  private mongoConnection: Promise<Mongoose>

  constructor() {
    this.mongo()
  }

  mongo() {
    this.mongoConnection = mongoose.connect(connection.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    })
  }
}

export default new Database()
