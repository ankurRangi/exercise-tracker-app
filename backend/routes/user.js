const { Router } = require("express");
const router = Router();
const { User } = require("../models/user.model");

router.get('/', (req, res) => {
  console.log("wotking");
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json({ message: err.message }));
});

router.post('/add', async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.create({ username: username, password: password });
    res.json({
      message: "User added successfully",
      username: username,
    });
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
