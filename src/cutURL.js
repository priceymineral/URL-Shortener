import { Storage } from "./data/Storage.js";
import { URLModel } from "../models/url_model.js";
// URL VALIDATION USING validator.js:
import validator from 'validator';

export const cutURL = (req, res) => {
  console.log("validator test:", validator.isURL(req.body.url));
  console.log("request URL:", req.body.url);
  if (validator.isURL(req.body.url)) {
    // Create code
    const code =  "xxxxx".replace(/x/g, () =>
      Math.floor(Math.random() * 16).toString(16)
    );

    // Create model using url_models.js
    let urlToSave = new URLModel({url: req.body.url, code: code});
    // Error
    // ReferenceError: URLToSave is not defined
    // at cutURL (file:///home/octavio/URL-Shortener/src/cutURL.js:19:5)

    // Save the new model instance, passing a callback
    URLToSave.save(function (err) {
      if (err) return handleError(err);
    // saved!
    });

    console.log("Success! Saved the URL.")
  } else {
    return res.status(400).send("Bad request, your URL is invalid");
  };
};
// // URL VALIDATION USING validator.js:
// import validator from 'validator';

// export const cutURL = (req, res) => {
//   console.log("validator test:", validator.isURL(req.body.url));
//   console.log("request URL:", req.body.url);
//   if (validator.isURL(req.body.url)) {
//     const code =  "xxxxx".replace(/x/g, () =>
//       Math.floor(Math.random() * 16).toString(16)
//     );
//     Storage.data.links[code] = req.body.url; // add key value to links
//     Storage.write(); // writes to storage.json
//     res.status(200).send({
//       code: code
//     });
//     console.log("Success! Saved the URL.")
//   } else {
//     return res.status(400).send("Bad request, your URL is invalid");
//   };
// };



// // Validation using RegEx
// export const cutURL = (req, res) => {
//   const urlRegex = /^(https?:\/\/)?[\d\w]+\.[\w]+(\/.*)*/;
//   console.log("validator test:", req.body.url === undefined || !urlRegex.test(req.body.url));
//   console.log("request URL:", req.body.url);

//   if (req.body.url === undefined || !urlRegex.test(req.body.url)) {
//     const code =  "xxxxx".replace(/x/g, () =>
//       Math.floor(Math.random() * 16).toString(16)
//     );

//     Storage.data.links[code] = req.body.url; // add key value to links
//     Storage.write(); // writes to storage.json
//     res.status(200).send({
//       code: code
//     });
//   } else {
//     return res.status(400).send("Bad request, your URL is invalid");
//   };
// };