import React, { useContext, useState, useEffect } from "react";
import { Marker } from "react-native-maps";

import { Map } from "./map.styles";

import { Search } from "../components/search.component";
import { MapCallout } from "../components/map-callout.component";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.05,
        }}
      >
        {restaurants.map((restaurant) => {
          const { lat, lng } = restaurant.geometry.location;
          return (
            <Marker
              key={restaurant.placeId}
              title={restaurant.name}
              coordinate={{ latitude: lat, longitude: lng }}
            >
              <MapCallout navigation={navigation} restaurant={restaurant} />
            </Marker>
          );
        })}
      </Map>
    </>
  );
};
