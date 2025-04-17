import dotenv from "dotenv";
dotenv.config();
import express from "express";
import rateLimiter from "./src/middleware/rateLimiterMiddleware.js";
import testing from "./urlTesting.js";

const app = express();
const port = process.env.PORT || 5000;
app.set("trust proxy", true);
app.get("/dashboard", rateLimiter, (req, res) => {
  return res.status(200).send("Hello!! Welcome to the dashboard");
});
app.get("/testing",testing);
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
