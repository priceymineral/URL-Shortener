import express from "express";
import { Storage } from "./src/data/Storage.js";
import { cutURL } from "./src/cutURL.js";
import { redirect } from "./src/redirect.js";

const app = express();
const port = 8080;

app.use(express.json());

if (Storage.data.links === undefined) {
  Storage.data.links = {};
  // Storage.data.links = new Map();
  Storage.write();
}

app.post("/cut", cutURL);

app.get("/[a-f0-9]{5}", redirect);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
});