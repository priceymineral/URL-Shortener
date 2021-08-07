import { Storage } from "./data/Storage.js";

export const redirect = (req, res) => {
  // console.log(req);
  // req.url = /code
  const code = req.url.replace(/\//, "");
  console.log('code:', code);
  let found = false;

  if (Storage.data.links[code]) {
    console.log('url:', Storage.data.links[code])
    found = true;
    res.redirect(Storage.data.links[code]);
    // http://expressjs.com/en/api.html#:~:text=res.redirect(%5Bstatus%2C%5D%20path)

  }

  if (!found) res.status(404).send("URL not found");
};
