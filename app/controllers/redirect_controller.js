import { UrlModel } from '../models/url_model.js';

async function redirect(req, res) {
  const code = req.url.replace(/\//, "");
  console.log('code => ', code);
  try {
    UrlModel.findOne({ code: code }, (e, doc) => {
      if (!e) {
        console.log('succressfully retrieved document =>', doc);
        res.redirect('https://'+doc.url);
        // res.status(200).send({url})
      } else {
        console.log('error retrieving code =>', e);
        res.status(400).send("Bad request, could not retrieve url")
      }
    });
  } catch (e) {
    console.error(e);
    // res.status(200).send(req.url);
  }
  // catch (e) {
  //   console.log('error retrieving code (2) =>', e);
  //   res.status(400).send("Bad request, could not retrieve url")
  // }

}

export { redirect };



// retrieve the url from mongoDB with the code
//   const code = req.url.replace(/\//, "");
//   if (successful response) {
  //     found = true;
  //     res.redirect(Storage.data.links[code]);
  //   }

  //   if (!found) res.status(404).send("URL not found");
  // };

  // import { Storage } from "./data/Storage.js";

// export const redirect = (req, res) => {
//   const code = req.url.replace(/\//, "");
//   let found = false;

//   if (Storage.data.links[code]) {
  //     found = true;
  //     res.redirect(Storage.data.links[code]);
  //   }

  //   if (!found) res.status(404).send("URL not found");
  // };