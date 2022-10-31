import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className='max-w-6xl flex h-screen text-white'>
      <div
        id='left-banner-login'
        className='flex-[0.4] bg-primary flex flex-col justify-center items-center gap-16'
      >
        <h3 className='text-2xl font-bold'>
          If you are already registered, to login <br />
          <Link href={'/login'} passHref>
            {' '}
            <span className='underline text-center'>click here</span>
          </Link>
        </h3>
      </div>
      <div id='right-register-container' className='flex-[0.6]'></div>
    </div>
  );
}
