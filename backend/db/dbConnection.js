import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Database connected successfully!");
    })
    .catch((err) => {
      console.log(
        `Some error occurred while connecting to the database: ${err.message}`
      );
    });
};

export default dbConnection;
