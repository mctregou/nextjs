'use client';

import useSWR from 'swr';
import WeatherBloc from '@/components/WeatherBloc';
import { parsedWeather } from '@/weather-utils/weatherParser';
import WeatherLoading from '@/components/WeatherLoading';
import WeatherTitle from '@/components/WeatherTitle';

const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());

const defaultClasses =
  'absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center';

export default function CSRWeather() {
  const { data, isLoading, error } = useSWR('/api/weather', fetcher);

  return (
    <div className={defaultClasses}>
      <WeatherTitle />
      {isLoading && <WeatherLoading />}
      {error && <>Error</>}

      {data && <WeatherBloc weather={parsedWeather(data)} />}
    </div>
  );
}
