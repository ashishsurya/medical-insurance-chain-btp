import Head from 'next/head';
import Link from 'next/link';

export default function RegisterLayout({ children, canLogin = true }) {
  return (
    <div className='p-5 h-screen'>
      <Head>
        <title>Register : Medical Insurance Chain</title>
      </Head>
      <div className='flex  text-white  h-full  bg-white rounded-xl'>
        <div
          id='left-banner-login'
          className='flex-[1] bg-primary flex flex-col justify-center items-center gap-16 rounded-l-xl'
        >
          <p className=''>
            If you are already having an account,
            <br />
            <span className='font-semibold text-4xl'>Welcome Back</span>
            <br />
            {canLogin && <Link href='/login'>Click here to login</Link>}
          </p>
        </div>
        <div id='right-register-container' className='flex-[2] p-4 text-black'>
          {children}
        </div>
      </div>
    </div>
  );
}
