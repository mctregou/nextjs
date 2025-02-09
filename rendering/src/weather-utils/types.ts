export type Weather = {
    current: {
      time: string;
      temperature_2m: number;
      wind_speed_10m: number;
    };
    hourly: {
      time: string[];
      weather_code: number[];
    };
  };
  
  export type WeatherTime = {
    time: string;
    weatherCode: number;
  };