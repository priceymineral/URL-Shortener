import express from "express";
import { cutURL } from "../controllers/cut_controller.js";
import { redirect } from "../controllers/redirect_controller.js";

const router = express.Router();

router.post("/cut", cutURL);
router.get("/[a-f0-9]{5}", redirect);
router.get('/', (req, res) => {
  res.json("message: Server is running :D");
});

export { router };