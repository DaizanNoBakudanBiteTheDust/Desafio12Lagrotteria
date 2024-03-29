import mongoose from "mongoose";

const messagesCollection = 'messagesTest' // colleccion db

const messagesSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

export const messagesModel = mongoose.model(messagesCollection, messagesSchema)