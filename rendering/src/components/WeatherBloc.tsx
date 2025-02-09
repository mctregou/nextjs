import { format } from 'date-fns';
import { WeatherTime } from '@/weather-utils/types';
import WeatherIcon from './WeatherIcon';

type WeatherBlocProps = {
  weather: { [key: string]: WeatherTime[] };
};

export default function WeatherBloc({ weather }: WeatherBlocProps) {
  return (
    <>
      <div>
        <table className='border-collapse table-fixed w-full text-sm mt-5'>
          <thead>
            <tr>
              <th className='text-center border-b'>Heure</th>
              {[...Array(12)].map((_day, index) => (
                <th key={`hour-${index * 2}`} className='text-center border-b'>
                  {`${(index * 2).toString().padStart(2, '0')}h`}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='bg-white dark:bg-slate-800'>
            {Object.keys(weather).map((weatherDate: string) => (
              <tr key={weatherDate}>
                <td className='text-center border-b border-slate-100 dark:border-slate-700 pt-4 text-slate-500 dark:text-slate-400'>
                  {format(weatherDate, 'dd/MM')}
                </td>
                {weather[weatherDate].map((weatherTime) => (
                  <td
                    key={weatherTime.time}
                    className='text-center border-b border-slate-100 dark:border-slate-700 pt-4 text-slate-500 dark:text-slate-400'
                  >
                    <WeatherIcon code={weatherTime.weatherCode} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
