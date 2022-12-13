const express = require('express');
const joi = require('joi');
const bcrypt = require('bcryptjs');
const Model = require('../model/user.modal');

const router = express.Router();
const loginSchema = joi.object({
	email: joi.string().email(),
	password: joi.string().min(8),
});
const registerSchema = joi.object({
	username: joi.string().required(),
	age: joi.number().required(),
	email: joi.string().required().email(),
	password: joi.string().required().min(8),
});

router.post('/registerUser', async (req, res) => {
	try {
		const { error } = await registerSchema.validateAsync(req.body);
	} catch (error) {
		res.status(400).send('Incorrect Email id');
	}

	// checking if the email id already exists

	const emailExists = await Model.findOne({ email: req.body.email });

	if (emailExists) {
		res.status(400).send('Email id already exists');
		return;
	}
	// using salt adding that salt layer
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);
	const user = new Model({
		username: req.body.username,
		age: req.body.age,
		email: req.body.email,
		password: hashedPassword,
	});

	try {
		const { error } = await registerSchema.validateAsync(req.body);
		const result = await user.save();
		res.status(200).send('User Successfully Registered');
	} catch (error) {
		res.status(500).send('this is the error, here.... - > ', error);
	}
});

// login user
router.post('/login', async (req, res) => {
	const user = await Model.findOne({ email: req.body.email });

	if (!user) {
		res.status(400).send('Email id doesn');
		return;
	}
	const validPassword = await bcrypt.compare(
		req.body.password,
		user.password
	);
	if (validPassword) {
		// const token = jwt.sign({ _id: user._id }, process.env.Token_Secret);
		// res.header('auth-token', token).send(token);
		res.send("loggedin successfully")
	} else {
		res.status(400).send('Invalid Password');
	}
});

router.get('/getAllPost', (req, res) => {
	res.send('All Post Data');
});

module.exports = router;
