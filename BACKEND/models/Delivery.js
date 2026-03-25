const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deliverySchema = new Schema({
    orderId: { type: String, required: true },
    customerName: { type: String, required: true },
    address: { type: String, required: true },
    items: { type: String, required: true },
    status: { type: String, enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
    deliveryDate: { type: Date, required: false },
    assignedDriver: { type: String, required: false },
    contactNumber: { type: String, required: true },
    specialInstructions: { type: String, required: false },
    createdAt: { type: Date, default: Date.now }
});

const Delivery = mongoose.model('Delivery', deliverySchema, 'deliveries');
module.exports = Delivery;