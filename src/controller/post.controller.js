const Post = require("../model/post.modal");

async function createPost(req, res) {

    const {author, content, title, imgUrl} = req.body;

    const newPost = await Post.create({author, content, title, imgUrl});

    res.send(newPost);

}

async function getAllPosts(req, res) {

    const data = await Post.find({}).lean();

    res.send(data);

}

async function getOnePost(req, res) {

    const { postId } = req.params;

    const data = await Post.findOne({postId});

    res.send(data);

}

async function deletePost(req, res) {

    const { id } = req.params;

    const data = await Post.deleteOne({_id: id});

    res.send(data);
}

module.exports = {
    createPost,
    getAllPosts,
    getOnePost,
    deletePost
}