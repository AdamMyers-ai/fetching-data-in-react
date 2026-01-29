// const API_KEY = import.meta.env.VITE_API_KEY;
// const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;
const BASE_URL = `http://localhost:3000/search?`;

export const show = async (city) => {
  try {
    const response = await fetch(`${BASE_URL}&city=${city}`);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
