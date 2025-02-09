import { Loader2 } from 'lucide-react';

export default function WeatherLoading() {
  return (
    <div className='flex items-center justify-center w-full'>
      <Loader2 className='h-10 w-10 animate-spin' />
    </div>
  );
}
