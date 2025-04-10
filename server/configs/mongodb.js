import mongoose from "mongoose";

export const connectDB = async() => {
    mongoose.connection.on('connected', ()=> {
        console.log("DB is connected");
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/udemy`)
}

