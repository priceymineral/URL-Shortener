import express from "express";
import { router } from './app/router/routes.js';
import { db } from './connection.js';
import './env.js';

const app = express();
const port = process.env.PORT || 8081;

app.use(express.json());
app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
});
