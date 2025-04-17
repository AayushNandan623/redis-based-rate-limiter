import axios from "axios";

export default async function testing() {
  const url = `http://localhost:${process.env.PORT}/dashboard`;
  let count = 0;
  let requests = process.env.SERVER_MAX_REQUEST_LIMIT + 10 || 110;

  for (count; count < process.env.SERVER_MAX_REQUEST_LIMIT + 10; count++) {
    try {
      const res = await axios.get(url);
      console.log(`Request processed, count: ${count}`);
    } catch (e) {
      console.log(`Request not processed processed, count: ${count}`);
    }
  }
}
