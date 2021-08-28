# URL-Shortener

url shortener based on: https://dev.to/agorushkin/url-shortener-api-with-express-in-5-minutes-2ehp instructions using Express.js

Instructions:

1. Launch the server (npm start)
2. shorten a URL by sending a POST request to http:localhost:8080/cut, with {"url": "<Your URL>"} json body. It will return a code.
3. Set the code as route to visit the URL.

Future Features:

1. Install nodemon for dev debugging (completed)
2. Connect to MongoDB (completed)
3. Implement validator.js library (completed but decided to resort to RegEx instead)
4. Switch Storage.data.links to an object to use Storage.data.links[link/code] instead of Storage.data.links.forEach(linkObject) (completed)
5. Don't create a new code for the same URL
6. Determine why validator.js is not working (it is currently validating invalid URLs)
7. make cutURL modular
8. fix redirect.js to retrieve from MongoDB
9. remove all writes to storage.json
10. delete storage.json
11. delete data folder
12. delete demo.js
13. delete connection.js

Bugs:

1. validator.js is "validating" invalid URLs
