import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
    barcode: String,
    name: String,
    price: Number,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostArticle = mongoose.model('PostArticle', articleSchema);
export default PostArticle;