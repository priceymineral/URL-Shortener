import express from "express";
// import { Storage } from "./src/data/Storage.js";
import { cutURL } from "./app/controllers/cut_url.js";
// import { redirect } from "./app/controllers/redirect.js";
import './env.js';

const app = express();
const port = process.env.PORT || 8081;

app.use(express.json());

// if (Storage.data.links === undefined) {
//   Storage.data.links = {};
//   // Storage.data.links = new Map();
//   Storage.write();
// }

app.post("/cut", cutURL);

// app.get("/[a-f0-9]{5}", redirect);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
});