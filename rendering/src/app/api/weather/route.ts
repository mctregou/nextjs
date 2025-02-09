import { NextResponse } from 'next/server';
import { WEATHER_API_URL } from '@/weather-utils/constants';
import { Weather } from '@/weather-utils/types';

const getWeatherHandler = async (): Promise<
  NextResponse<Weather | null>
> => {
    const data = await fetch(WEATHER_API_URL);

    const weather: Weather = (await data.json()) ?? null;

  return NextResponse.json(weather);
};

export const GET = getWeatherHandler;
