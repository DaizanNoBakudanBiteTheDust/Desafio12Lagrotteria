import mongoose from "mongoose";

const cartsCollection = 'cartsTest' // colleccion db

const cartsSchema = new mongoose.Schema({

    products: {

        //Vamos a definir la referencia al a coleccion de cursos:

        type: [{

            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "products"
            },

            quantity: {
                type: Number,
                default: 0
            }

        }],

        default: []

    }

});

cartsSchema.pre(['find', 'findOne', 'findById', 'findOneAndUpdate', 'findByIdAndUpdate', 'update', 'findByIdAndReturnDocument'], function () {
    this.populate('products.product');
});



export const cartsModel = mongoose.model(cartsCollection, cartsSchema)