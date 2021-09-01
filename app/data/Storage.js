import fs from "fs";

export const Storage = {
  data: fs.existsSync("storage.json") // check if the file exists
    ? JSON.parse(fs.readFileSync("storage.json", "utf8")) // if it does, parse the file
    : JSON.parse( // if it doesn't exist, create it then parse the data
        fs.readFileSync(
          fs.appendFileSync("storage.json", "{ links: {} }"), "utf8"
        )
      ),

  write: () =>
    fs.existsSync("storage.json")
      ? fs.writeFileSync("storage.json", JSON.stringify(Storage.data , null, 2))
      : fs.appendFileSync(
          "storage.json", JSON.stringify(Storage.data, null, 2)
        )
};

// /home/octavio/URL-Shortener/src/data/Storage.js