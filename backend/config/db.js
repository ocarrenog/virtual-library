const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    
    console.log(process.env.MONGODB_URI);
    const db = await mongoose.connect(process.env.MONGODB_URI);
    //const urld = `${db.connection.host}:${db.connection.port}`;
    console.log("MongoDB Database connected:");
    } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
