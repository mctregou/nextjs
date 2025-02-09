import { Suspense } from 'react';
import WeatherLoading from '@/components/WeatherLoading';
import WeatherPageContent from './WeatherPageContent';
import WeatherTitle from '@/components/WeatherTitle';

const defaultClasses =
  'absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center';

export default async function SSRWithStreamingWeather() {
  return (
    <div className={defaultClasses}>
      <WeatherTitle />
      <Suspense fallback={<WeatherLoading />}>
        <WeatherPageContent />
      </Suspense>
    </div>
  );
}
