/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const logger = require("firebase-functions/logger");

const { Client } = require("@googlemaps/google-maps-services-js");

const { geocodeRequest } = require("./geocode/index");
const { placesRequest } = require("./places/index");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

const client = new Client({});

exports.geocode = functions
  .runWith({ maxInstances: 3 })
  .https.onRequest((request, response) => {
    geocodeRequest(request, response, client);
  });

exports.placesNearby = functions
  .runWith({ maxInstances: 3 })
  .https.onRequest((request, response) => {
    placesRequest(request, response, client);
  });
