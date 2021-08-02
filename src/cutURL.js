import { Storage } from "./data/Storage.js";

export const cutURL = (req, res) => {
  // To make sure URL is valid, we will use the validator regex
  const urlRegex = /^(https?:\/\/)?[\d\w]+\.[\w]+(\/.*)*/;

  // check if the URL is valid, if not, send 400 response
  if (req.body.url === undefined || !urlRegex.test(req.body.url)) {
    console.log('req.body.url: ', req.body.url);
    return res.status(400).send("Bad request");
  };

  // In case we successfully manage to validate the URL, we would need to generate a key/code for it, for this we will use replace method that will make a string of 5 hexadecimal characters.
  const code =  "xxxxx".replace(/x/g, () =>
    Math.floor(Math.random() * 16).toString(16)
  );

  Storage.data.links.push({
    url: req.body.url,
    code: code
  });
  Storage.write();

  res.status(200).send({
    code: code
  });
};


