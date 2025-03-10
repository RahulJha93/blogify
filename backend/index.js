  import express from "express";
  import userRoute from "./routes/userRoute.js";
  import postRoute from "./routes/postRoute.js";
  import commentRoute from "./routes/commentRoute.js";
  import webHookRoute from "./routes/webHookRoute.js";
  import connectDB from "./lib/connectDB.js";
  import dotenv from "dotenv";
  import { clerkMiddleware, requireAuth } from "@clerk/express";

  const app = express();
  const port = process.env.PORT || 8000;
  dotenv.config();
  app.use(clerkMiddleware());
  app.use("/webhooks", webHookRoute);
  app.use(express.json());

  app.use("/users", userRoute);
  app.use("/posts", postRoute);
  app.use("/comments", commentRoute);

  // Centralized error-handling middleware
  app.use((err, req, res, next) => {
    console.error(err)
    res.status(err.status || 500);
    res.json({
      message: err.message || "Something went wrong",
      status: err.status,
      stack: err.stack,
    });
  });

  // Connect to MongoDB
  connectDB();

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
