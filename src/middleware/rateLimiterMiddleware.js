import client from "../utils/client.js";

const rateLimiter = async (req, res, next) => {
  const ipAddress = req.ip;
  const key = `ip:${ipAddress}`;
  try {
    const cachedData = await client.get(key);
    if (cachedData == null) {
      await client.set(key, 0, "EX", 60);
    }
    await client.incr(key);
    const count = await client.get(key);
    if (count > process.env.SERVER_MAX_REQUEST_LIMIT) {
      return res.status(429).json({
        error: "Too Many Requests",
        message: "Rate limit exceeded. Please try again in 60 seconds.",
      });
    } else {
      next();
      return;
    }
  } catch (e) {
    console.log(e);
  }
};
export default rateLimiter;
