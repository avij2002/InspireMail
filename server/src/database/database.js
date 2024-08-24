import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const databaseInstance = await mongoose.connect(
      `${process.env.DATABASE_MONGOOSE_URI}/${process.env.DATABASE_NAME}`
    );
    console.log(
      `SUCCESS: Database Connection is Successfull: ${databaseInstance.connection.host}`
    );
  } catch (error) {
    console.log("ERROR: Database Connection failed: ", error);
  }
};
export default connectDatabase;
