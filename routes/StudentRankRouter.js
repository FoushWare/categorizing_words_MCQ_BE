/** @format */

const express = require("express");
const Question = require("../models/question");
// questions controller
const questionsController = require("../controllers/questions.controller");

const router = express.Router();

// Get all questions from the database
router.post("/", questionsController.getStudentRank);

module.exports = router;
