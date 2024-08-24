import { app, PORT } from "./app.js";
import dotenv from "dotenv";
import connectDatabase from "./database/database.js";

dotenv.config({
  path: "./.env",
});

connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`SUCCESS: Server is running on PORT: ${PORT}`);
    });
  })
  .catch(() => {
    console.log("ERROR: In Connecting Database: ", error);
  });
