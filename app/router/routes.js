import express from "express";
import { cutURL } from "../controllers/cut_url.controller.js";

const router = express.Router();

router.post("/cut", cutURL);

// app.get("/[a-f0-9]{5}", redirect);

router.get('/', (req, res) => {
  res.json("message: Server is running :D");
});

export { router };