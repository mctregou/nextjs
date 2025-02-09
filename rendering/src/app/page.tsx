import Link from 'next/link';

export default async function WeatherMenuPage() {
  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center'>
      <h1 className='text-center text-xl font-bold mb-4'>
        3 manières de charger une page :
      </h1>
      <div className='flex justify-center'>
        <Link
          href='/csr'
          className='bg-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-3'
        >
          CSR
        </Link>
        <Link
          href='/ssr'
          className='bg-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-3'
        >
          SSR
        </Link>
        <Link
          href='/ssr-with-streaming'
          className='bg-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-3'
        >
          SSR streaming
        </Link>
      </div>
    </div>
  );
}
