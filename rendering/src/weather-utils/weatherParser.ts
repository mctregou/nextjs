import { format } from "date-fns";
import { Weather, WeatherTime } from "./types";

  export const parsedWeather = (weather: Weather) : ({[key: string]: WeatherTime[]}) => {
    const days: { [key: string]: WeatherTime[] } = {};
    weather.hourly.time.forEach((time, index) => {
        const date = format(new Date(time), "yyyy-MM-dd");
      if (!days[date]) {
        days[date] = [];
      }
      if ((new Date(time)).getHours() % 2 === 0) {
        days[date].push({ time, weatherCode: weather.hourly.weather_code[index] });
      }
    });

    return days;
  };