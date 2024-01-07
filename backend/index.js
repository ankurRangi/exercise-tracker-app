const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const exerciseRouter = require("./routes/exercise");
const userRouter = require("./routes/user");

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors);
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDb database connection established successfully");
})

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

