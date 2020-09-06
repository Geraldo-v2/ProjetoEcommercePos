import mongoose, { mongo } from 'mongoose';
const shippingSchema ={
    endereco: {type: String, required: true},
    numero: {type: String, required: true},
    bairro: {type: String, required: true},
    cep: {type: String, required: true},
    cidade: {type: String, required: true},
    estado: {type: String, required: true},
};

const paymentSchema = {
    paymentMethod: {type: String, required: true}
};

const orderItemSchema = new mongoose.Schema({
    name: {type: String, required: true},
    qty: {type: Number, required: true},
    image: {type: String, required: true},
    price: {type: String, required: true},
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
});

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref:'User', required: true},
    orderItems:[orderItemSchema],
    shipping: shippingSchema,
    payment: paymentSchema,
    itemsPrice: {type: Number},
    shippingPrice: {type: Number},
    totalPrice: {type: Number},
    isPaid: {type: Boolean, default: false},
    paidAt: {type: Date},
    isDelivered: {type: Boolean, default: false},
    deliveredAt: {type: Date},
},{
    timestamps: true
});

const orderModel = mongoose.model("Order", orderSchema);
export default orderModel;