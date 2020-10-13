const mongoose = require('mongoose');

// DB CONNECTION
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology:true
            })    
        console.log('Connected to DB')

    } catch (error) {
        console.log('Database Connection Failed !')
    }
}

module.export = connectDB