import React, { useState, useEffect } from 'react';

export const Location = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });

  const onSuccess = location => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = error => {
    setLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return (
    <div>
      <div>Loading: {!location.loaded ? "Loading..." : "Loaded"}</div>
      <div>
        Latitude: {location.loaded ? location.coordinates.lat : "Loading..."}
      </div>
      <div>
        Longitude: {location.loaded ? location.coordinates.lng : "Loading..."}
      </div>
      {location.error && <div>Error: {location.error.message}</div>}
    </div>
  );
};
