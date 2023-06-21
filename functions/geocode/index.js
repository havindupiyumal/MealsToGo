const { locations: locationsMock } = require("./geocode.mock");
const functions = require("firebase-functions");
const url = require("url");

const GOOGLE_API_KEY = functions.config().google.key;

module.exports.geocodeRequest = (request, response, client) => {
  const { city, mock } = url.parse(request.url, true).query;

  if (mock === "true") {
    console.log(mock);
    const locationMock = locationsMock[city.toLowerCase()];
    if (!locationMock) response.send("No geocode found");
    response.json(locationMock);
  }

  // if not mock data, get the data from google geocode API
  client
    .geocode({
      params: {
        address: city,
        key: GOOGLE_API_KEY,
      },
      timout: 1000,
    })
    .then((res) => response.json(res.data))
    .catch((e) => {
      response.status(400);
      return response.send(e.response.data.error_message);
    });
};
