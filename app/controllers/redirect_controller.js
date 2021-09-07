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