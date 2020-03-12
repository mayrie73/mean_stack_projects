var mongoose = require('mongoose');
var BookSchema = new mongoose.Schema({
    title: String,
    description:{
        type: String,
        default: '',
    },
    completed: {
        type: Boolean,
        default: false,
    }
}, {timestamps: true});

mongoose.model("Book", BookSchema);
