import { useForm } from 'react-hook-form';
import PatientRegistrationForm from '../../components/PatientRegistrationForm';
import RegisterLayout from '../../components/layouts/RegisterLayout';
import { useState } from 'react';
import Link from 'next/link';
import { useAccount } from 'wagmi';
import { createHash } from 'crypto';

import { registerPatientContract } from '../../../middlewares/registerPatientContract';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';

export default function PatientRegister({}) {
  const [loadingState, setLoadingState] = useState(false);
  const { isConnected, address } = useAccount();
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  async function registerUser(data) {
    if (!isConnected) {
      toast.error('Connect to wallet before loggin in.');
      return;
    }
    const { fullName, aadhaarNumber, dob } = data;
    const hash =
      '0x' +
      createHash('sha256')
        .update(`${fullName} ${aadhaarNumber} ${dob}`)
        .digest('hex');
    setLoadingState(true);
    // TODO : contact the registration smart contract.......
    const res = await registerPatientContract(hash, address);
    if (res === 'Something Went wrong....') {
      toast.error('Not able to contact web3');
      return;
    } else {
      toast.success('Login successful');
      localStorage.setItem('currUser', JSON.stringify(data));
      localStorage.setItem('userType', 'patient');
      router.replace('/patient');
    }
  }

  return (
    <RegisterLayout>
      <h2 className='text-4xl text-primary text-center my-9'>
        Register as Patient{' '}
      </h2>

      <p className='text-center text-sm text-gray-500'>
        Register your hospital <Link href={'/register/hospital'}>here</Link>
      </p>

      <PatientRegistrationForm
        register={register}
        handleSubmit={handleSubmit}
        loadingState={loadingState}
        registerUser={registerUser}
      />
    </RegisterLayout>
  );
}
