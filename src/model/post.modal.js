const mongoose = require('mongoose')

const schema = mongoose.Schema({

    author: {
        type: String,
        required: true,
        default: 'annon'
    },
    content: {
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        // required: true,
        default: "https://images.pexels.com/photos/1002722/pexels-photo-1002722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
}, {timestamps: true})

const Post = mongoose.model('Post', schema)

module.exports = Post;