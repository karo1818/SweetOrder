import PostArticle from "../models/postArticle.js";

export const getArticles = async (req, res) => {
    try{
        const postArticles = await PostArticle.find();
        console.log(postArticles);
        res.status(200).json(postArticles);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const createArticle = async (req, res) => {
    const post = req.body;
    const newPost = new PostArticle(post);
    try{
        await newPost.save();
        res.status(201).js(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}
