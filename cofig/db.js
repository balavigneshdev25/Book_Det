const magoose = require('mangoose')

const connectDB = async ()=>{
    await magoose.connect(process.env.MONGO_URI)
}

module.export = connectDB;