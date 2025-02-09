import { Weather } from '@/weather-utils/types';
import { parsedWeather } from '@/weather-utils/weatherParser';
import WeatherBloc from '@/components/WeatherBloc';
import WeatherTitle from '@/components/WeatherTitle';
import { WEATHER_API_URL } from '@/weather-utils/constants';

const defaultClasses =
  'absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center';

export default async function SSRWeather() {
  const res = await fetch(WEATHER_API_URL);
  const weather: Weather = await res.json();

  return (
    <div className={defaultClasses}>
      <WeatherTitle />
      <WeatherBloc weather={parsedWeather(weather)} />
    </div>
  );
}
