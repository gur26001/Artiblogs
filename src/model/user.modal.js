const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
	username: {
		type: String,
	},
	age: {
		type: Number,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		min: 8,
		max: 255,
	},
});

module.exports = mongoose.model('User', userSchema);
