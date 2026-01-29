import React from "react";

const WeatherDetails = ({ weather }) => {
  return (
    <section>
      <h2>Weather Details</h2>
      {weather ? (
        <>
          {" "}
          <p>Location: {weather.location}</p>
          <p>Temperature: {weather.temperature}</p>
          <p>Condition: {weather.condition}</p>
        </>
      ) : (
        "Please search for a Location to see weather details"
      )}
    </section>
  );
};

export default WeatherDetails;
