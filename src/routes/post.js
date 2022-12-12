const express= require('express');

const router = express.Router();



const {
	createPost,
	getAllPosts,
	getOnePost,
	deletePost,
} = require('../controller/post.controller');



// FOR POSTS
router.get('/all', getAllPosts);

router.get('/:postId', getOnePost);

router.post('/create', createPost);

router.delete('/delete/:id', deletePost);


module.exports = router;