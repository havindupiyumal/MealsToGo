import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `http://127.0.0.1:5001/mealstogo-344208/us-central1/geocode?city=${searchTerm}`
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const locationDataTransform = (result) => {
  const { geometry = {} } = camelize(result.results)[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};
