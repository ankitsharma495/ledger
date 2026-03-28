require("dotenv").config();
const mongoose = require("mongoose");

async function connectToDB() {
    if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI is missing in environment variables");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("db connected");
}

module.exports= connectToDB;
