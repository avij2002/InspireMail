import cookieParser from "cookie-parser";
import express, { urlencoded } from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(cookieParser());
app.use(urlencoded({ extended: true, limit: "16kb" }));

const PORT = process.env.PORT || 3000;

export { app, PORT };
