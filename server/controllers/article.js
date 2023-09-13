import Article from "../models/Article.js";

export const getArticles = async (req, res) => {
    try{
        const articles = await Article.find();
        console.log(articles);
        res.status(200).json(articles);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const createArticle = async (req, res) => {
    const article = req.body;
    const newArticle = new Article(article);
    try{
        await newArticle.save();
        res.status(201).js(newArticle);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}
