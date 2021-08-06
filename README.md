# URL-Shortener

url shortener based on: https://dev.to/agorushkin/url-shortener-api-with-express-in-5-minutes-2ehp instructions using Express.js

Instructions:

1. Launch the server
2. shorten a URL by sending a POST request to http:localhost:8080/cut, with {"url": "<Your URL>"} json body. It will return a code.
3. Set the code as route and use it to visit the URL.

Future Features:

1. Install nodemon for dev debugging
2. Connect to Reddis.io
3. Implement validator.js library
4. Switch Storage.data.links to an object to use Storage.data.links[link/code] instead of Storage.data.links.forEach(linkObject)
5. Don't create a new code for the same URL
