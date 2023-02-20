import {  useForm } from 'react-hook-form';
import PatientRegistrationForm from '../../components/PatientRegistrationForm';
import RegisterLayout from '../../components/layouts/RegisterLayout';
import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useAccount } from 'wagmi';

export default function PatientRegister({}) {
  const [loadingState, setLoadingState] = useState(false);
  const { isConnected } = useAccount();
  const { register, handleSubmit } = useForm();

  async function registerUser(data) {
    console.log(data);
    if (!isConnected) {
      toast('Connect Wallet', { type: 'error' });
    }
    setLoadingState(true)
    // TODO : contact the registration smart contract.......
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
