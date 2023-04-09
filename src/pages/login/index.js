import Head from 'next/head';
import { useRecoilValue } from 'recoil';
import { loginSwitchAtom } from '../../atoms/loginSwitchAtom';
import LoginSwitch from '../../components/LoginSwitch';
import HospitalLoginForm from '../../components/forms/HospitalLoginForm';
import PatientLoginForm from '../../components/forms/PatientLoginForm';

export default function LoginPage() {
  const currLogin = useRecoilValue(loginSwitchAtom);
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Head>
        <title>{currLogin} Login &middot; MediChain</title>
      </Head>
      <div className='max-w-md border shadow-lg rounded-lg bg-white flex flex-col items-center px-8 py-4 space-y-4'>
        <h2 className='text-primary tracking-tighter font-bold text-4xl'>
          Login{' '}
        </h2>
        <LoginSwitch />
        {currLogin === 'Patient' && <PatientLoginForm />}
        {currLogin === 'Hospital' && <HospitalLoginForm />}
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   return {
//     redirect: {
//       destination: '/login/patient',
//     },
//   };
// }
