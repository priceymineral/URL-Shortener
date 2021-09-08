import express from "express";
import { router } from './app/router/routes.js';
import { db } from './connection.js';
import './env.js';
import path from 'path';
// https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-when-using-the-experimental-modules-flag
const __dirname = path.resolve(path.dirname(decodeURI(new URL(import.meta.url).pathname)));
const app = express();
const port = process.env.PORT || 8081;

app.use(express.static(__dirname + '/client/dist'))
app.use(express.json());
app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
});
