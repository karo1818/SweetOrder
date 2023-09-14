import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    available: Boolean,
    barcode: String,
    category: String,
    name: String,
    price: Number
});

var Article = mongoose.model('Article', articleSchema);
export default Article;