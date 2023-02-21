import Head from 'next/head';
import Link from 'next/link';

export default function LoginLayout({ children }) {
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
            Welcome Back
            <br />
            <span className='font-semibold text-4xl'>
              Login to your account
            </span>
            <br />
            <Link href={'/register'}>Create Account</Link>
          </p>
        </div>
        <div id='right-register-container' className='flex-[2] p-4 text-black'>
          {children}
        </div>
      </div>
    </div>
  );
}
