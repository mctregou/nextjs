import { Weather } from '@/weather-utils/types';
import { parsedWeather } from '@/weather-utils/weatherParser';
import WeatherBloc from '@/components/WeatherBloc';
import { WEATHER_API_URL } from '@/weather-utils/constants';

export default async function WeatherPageContent() {
  const res = await fetch(WEATHER_API_URL);

  const weather: Weather = await res.json();

  return <WeatherBloc weather={parsedWeather(weather)} />;
}
