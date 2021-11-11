import React from "react";

const  Weather = () =>{
  state = {
    weather: null,
  };
  api_call = async (e) => {
    e.preventDefault();
    const location = location;
    if (location) {
      const API_KEY = "9c3cb98520f309bd159e77512e8e5e28";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
      const request = await fetch(url);
      const response = await request.json();
      this.setState({ weather: response });
    }
    return (
        //the Weather api calls
    )
  };
}
  export default Weather;
