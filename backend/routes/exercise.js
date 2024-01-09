const { Router } = require("express");
const router = Router();
const { Exercise } = require("../models/exercise.model");

router.get("/", (req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.json({ message: err.message }));
});

router.post("/add", (req, res) => {
  try {
    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = req.body.date;

    const exer = Exercise.create({
      username: username,
      description: description,
      duration: duration,
      date: date,
    });
    exer.save();
    res.json({
      message: "Exercise added successfully",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

module.exports = router;
