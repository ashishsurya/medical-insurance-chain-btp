import Link from 'next/link';
import RegisterForm from '../components/RegisterForm';

export default function RegisterPage() {
  return (
    <div className='p-5 h-screen'>
      <div className='flex  text-white  h-full  bg-white rounded-xl'>
        <div
          id='left-banner-login'
          className='flex-1 bg-primary flex flex-col justify-center items-center gap-16 rounded-l-xl'
        >
          <p className=''>
            If you are already having an account,
            <br />
            <span className='font-semibold text-4xl'>Welcome Back</span>
            <br />
            <Link href='/login'>Click here to login</Link>
          </p>
        </div>
        <div id='right-register-container' className='flex-[2]'>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
