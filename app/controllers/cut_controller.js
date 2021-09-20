// import validator from 'validator';
import { UrlModel } from '../models/url_model.js';

function validURL(str) {
  // https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}
// potential validation => https://dev.to/calvinpak/simple-url-validation-with-javascript-4oj5
async function cutURL(req, res) {
  if (validURL(req.body.url)) {
    const code =  "xxxxx".replace(/x/g, () =>
      Math.floor(Math.random() * 16).toString(16)
    );
    // call to save the url and code to DB
    try {
      const instance = new UrlModel({
        url: req.body.url,
        code: code
      })
      await instance.save(e => {
        if (!e) {
          console.log('Successfully saved url!');
          res.status(200).send({
            code: code
          })
        } else {
          console.log('something wrong:', e);
        }
      })
    } catch (e) {
      console.error(e)
    };
  } else {
    return res.status(400).send("Bad request, your URL is invalid");
  };
};

export { cutURL }

// TESTING VALIDATION
// const urlRegex = /^(https?:\/\/)?[\d\w]+\.[\w]+(\/.*)*/;
// console.log('validator.js result:', validator.isURL(req.body.url));
// console.log("Short RegEx validation:", req.body.url === undefined || !urlRegex.test(req.body.url));
// console.log("request URL:", req.body.url);

// // VALIDATION USING RegEx
// export const cutURL = (req, res) => {
//   const urlRegex = /^(https?:\/\/)?[\d\w]+\.[\w]+(\/.*)*/;
//   console.log("validator test:", req.body.url === undefined || !urlRegex.test(req.body.url));
//   console.log("request URL:", req.body.url);
//   if (req.body.url === undefined || !urlRegex.test(req.body.url)) {
  //     const code =  "xxxxx".replace(/x/g, () =>
  //       Math.floor(Math.random() * 16).toString(16)
  //     );

  // // VALIDATION USING validator.js
    // if (validator.isURL(req.body.url)) {
    //   const code =  "xxxxx".replace(
    //     /x/g, () => Math.floor(Math.random() * 16).toString(16)
    //   );

//     Storage.data.links[code] = req.body.url; // add key value to links
//     Storage.write(); // writes to storage.json
//     res.status(200).send({
//       code: code
//     });
//   } else {
//     return res.status(400).send("Bad request, your URL is invalid");
//   };
// };

// SAVING DOC WITHOUT MONGOOSE
// try {
//   // await client.connect();
//   await createListing(client, {
//     url: req.body.url,
//     code: code
//   })
//   res.status(200).send({
//     code: code
//   });

// } catch (e) {
//   console.error(e);

// } finally {
//   await client.close();

// }
// async function createListing(client, newListing) {
//   const result = await client.db().collection('test_collection').insertOne(newListing);

//   console.log(`New listing inserted with id: ${result.insertedId}`);
// }