import { Storage } from "./data/Storage.js";
import validator from 'validator';

export const cutURL = (req, res) => {
  console.log(validator.isURL(req.body.url));
  console.log(req.body.url);
  if (validator.isURL(req.body.url)) {
    const code =  "xxxxx".replace(/x/g, () =>
      Math.floor(Math.random() * 16).toString(16)
    );

    Storage.data.links[code] = req.body.url; // add key value to links
    Storage.write(); // writes to storage.json

    res.status(200).send({
      code: code
    });
  } else {
    return res.status(400).send("Bad request");
  };
};

// URL VALIDATION USING REGEX:
  // To make sure URL is valid, we will use the validator regex
  // const urlRegex = /^(https?:\/\/)?[\d\w]+\.[\w]+(\/.*)*/;

  // check if the URL is valid, if not, send 400 response
  // if (req.body.url === undefined || !urlRegex.test(req.body.url)) {
  //   return res.status(400).send("Bad request");
