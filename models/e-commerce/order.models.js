import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    }
}, {timestamps:true})

const orderSchema = new mongoose.Schema({
orderPrice:{
    type:Number,
    required: true
},
customer:{
    type:mongoose.Schema.Types.ObjectId,
    required: true
},
orderItems:{
type:[orderItemSchema]
}
},{timestamps:true})

export const Order = mongoose.model('Order', orderSchema) 