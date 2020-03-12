var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, ' Product name must be greater than 3 characters'],
        required: [true, 'Author name cannot be blank']
    },
    quantity: {
        type: Number,
        min: [1, 'Quantity amount must be greater than 0'],
        required: [true, 'Quantity amount cannot be blank']
    },
    price: {
        type: Number,
        min: [1, 'Product price must be greater than 0'],
        required: [true, 'Product price cannot be blank']
    },
}, {timestamps: true
});
mongoose.model("Product", ProductSchema);