import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/quizAppDB");
    console.log("MongoDb Connected:" + conn.connection.host);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};


