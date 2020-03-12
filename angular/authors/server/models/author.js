var mongoose = require('mongoose');
var AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, 'Author name must be greater than 3 characters'],
        required: [true, 'Author name cannot be blank']
    }
}, {timestamps: true
});
mongoose.model("Author", AuthorSchema);