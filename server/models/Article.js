import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
    barcode: String,
    name: String,
    available: Boolean,
    price: Number,
    category: String
});

const Article = mongoose.model('Article', articleSchema);
export default Article;