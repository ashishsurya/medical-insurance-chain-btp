import Head from 'next/head';
import LoginSwitch from '../../components/LoginSwitch';
import { useRecoilValue } from 'recoil';
import { loginSwitchAtom } from '../../atoms/loginSwitchAtom';
import PatientRegisterForm from '../../components/forms/PatientRegisterForm';
import HospitalRegistration from '../../components/forms/HospitalRegistrationForm';
import InsuranceCompanyRegistrationForm from '../../components/forms/InsuranceCompanyRegistrationForm';
import Link from 'next/link';

export default function RegisterPage() {
  const currAuthParty = useRecoilValue(loginSwitchAtom);
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Head>
        <title>{currAuthParty} Register &middot; MediChain</title>
      </Head>
      <div className='max-w-md border shadow-lg rounded-lg bg-white flex flex-col items-center px-8 py-4 space-y-4'>
        <h2 className='text-primary tracking-tighter font-bold text-4xl'>
          Register{' '}
        </h2>
        <LoginSwitch />
        {currAuthParty === 'Patient' && <PatientRegisterForm />}
        {currAuthParty === 'Hospital' && <HospitalRegistration />}
        {currAuthParty === 'InsuranceCompany' && (
          <InsuranceCompanyRegistrationForm />
        )}
        <Link href={"/login"} className='text-primary'>Already registered login here.</Link>
      </div>
    </div>
  );
}
