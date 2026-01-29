import "./App.css";
import * as weatherService from "./services/weatherService";
import WeatherSearch from "./components/WeatherSearch/WeatherSearch";
// import { show } from './services/weatherService'
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";
import { useState, useEffect } from "react";

function App() {
  const [weather, setWeather] = useState();

  const fetchData = async (city) => {
    const data = await weatherService.show(city);
    setWeather({
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    });
  };

  useEffect(() => {
    const fetchDefaultData = async () => {
      const data = await weatherService.show("New York");
      const newWeatherState = {
        location: data.location.name,
        temperature: data.current.temp_f,
        condition: data.current.condition.text,
      };
      setWeather(newWeatherState);
    };

    fetchDefaultData();
  }, []);

  console.log(weather);
  return (
    <>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData} />
      <WeatherDetails weather={weather} />
    </>
  );
}

export default App;
