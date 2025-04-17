import { Redis } from "ioredis";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.REDIS_URL || "";
const client = new Redis(url);
client.on("connect", () => {
  console.log("Connected to redis server");
});
client.on("error", () => {
  console.log("Error in connecting to redis server");
});
export default client;
