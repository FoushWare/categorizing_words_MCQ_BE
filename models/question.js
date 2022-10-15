/** @format */

const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
	questionText: {
		type: String,
		required: true,
	},
	answerOptions: [
		{
			answerText: { type: String, required: true },
			isCorrect: { type: Boolean, required: true },
		},
	],
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
