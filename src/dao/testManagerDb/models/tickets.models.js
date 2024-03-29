import mongoose from "mongoose";

const ticketCollection = 'ticketsTest';

const ticketsSchema = new mongoose.Schema({
    code: {
        type: String,
        require: true,
        unique: true
    },
    purchase_datetime: {
        type: String,
        require: true
    },
    amount: {
        type: Number,
        require: true
    },
    purchaser: {
        type: String,
        require: true
    }
})

export const ticketModel = mongoose.model(ticketCollection, ticketsSchema)