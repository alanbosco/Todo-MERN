import mongoose from "mongoose"

import * as dotenv from "dotenv";
import path from "path"

dotenv.config({ path: path.join( __dirname, '../../.env') })

class MongoDatabase {
    readonly options: object = {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        socketTimeoutMS: 30000,
        keepAlive: true,
        autoIndex: false,
        retryWrites: false
    };
    protocol: string = process.env.MONGO_PROTOCOL || 'mongodb'
    username: string = process.env.MONGO_USERNAME || 'admin'
    password: string = process.env.MONGO_PASSWORD || 'password'
    host: string = process.env.MONGO_URL || 'url'
    database: string = process.env.MONGO_DATABASE || 'db'

    constructor() {}
    async connect() {
        return await mongoose.connect(`${this.protocol}://${this.username}:${this.password}@${this.host}/${this.database}`, this.options)
    }

}

export default MongoDatabase