import Head from 'next/head';
import { useRecoilValue } from 'recoil';
import { loginSwitchAtom } from '../../atoms/loginSwitchAtom';
import LoginSwitch from '../../components/LoginSwitch';
import HospitalLoginForm from '../../components/forms/HospitalLoginForm';
import PatientLoginForm from '../../components/forms/PatientLoginForm';
import InsuranceLoginForm from '../../components/forms/InsuranceLoginForm';

export default function LoginPage() {
  const currAuthParty = useRecoilValue(loginSwitchAtom);
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Head>
        <title>{currAuthParty} Login &middot; MediChain</title>
      </Head>
      <div className='max-w-lg border shadow-lg rounded-lg bg-white flex flex-col items-center px-8 py-4 space-y-4'>
        <h2 className='text-primary tracking-tighter font-bold text-4xl'>
          Login{' '}
        </h2>
        <LoginSwitch />
        {currAuthParty === 'Patient' && <PatientLoginForm />}
        {currAuthParty === 'Hospital' && <HospitalLoginForm />}
        {currAuthParty === 'InsuranceCompany' && <InsuranceLoginForm />}
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
