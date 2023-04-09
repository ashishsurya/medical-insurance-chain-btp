import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useAccount } from 'wagmi';
import { createHash } from 'crypto';
import { loginPatientContract } from '../../../middlewares/loginPatientContract';

const PatientLoginForm = () => {
  const { register, handleSubmit } = useForm();
  const { isConnected } = useAccount();
  const router = useRouter();

  const loginPatient = async (data) => {
    if (!isConnected) {
      toast.error('Connect to a wallet before logging in.');
      return;
    }
    const { name, aadhaarNumber, dob } = data;
    const hash =
      '0x' +
      createHash('sha256')
        .update(`${name} ${aadhaarNumber} ${dob}`)
        .digest('hex');
    // TODO : contact the login smart contract.......
    const res = await loginPatientContract(hash);
    console.log(res);
    if (res === 'Something Went wrong....') {
      toast.error('Not able to contact web3');
      return;
    } else if (res === '0x0000000000000000000000000000000000000000') {
      toast('No account registered with following details', { icon: '👀' });
    } else {
      toast.success('Login successful');
      localStorage.setItem('currUser', JSON.stringify(data));
      localStorage.setItem('userType', 'patient');
      router.replace('/patient');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(loginPatient)}
      className='w-full flex flex-col space-y-3'
    >
      <input
        type='text'
        placeholder='Enter patient name....'
        className='w-full px-4 py-2'
        {...register('name', { required: true })}
      />
      <input
        type='date'
        placeholder='Enter patient DOB'
        className='w-full px-4 py-2'
        {...register('dob', { required: true })}
      />
      <p className='text-sm font-semibold tracking-tighter '>Aadhaar Number</p>
      <input
        type='text'
        placeholder='xxxx-xxxx-xxxx'
        className='w-full px-4 py-2'
        {...register('aadhaarNumber', { required: true })}
      />
      <ConnectButton />
      <button
        type='submit'
        className='w-full px-4 py-2 text-white bg-primary hover:bg-opacity-95 duration-500'
      >
        Login
      </button>
    </form>
  );
};

export default PatientLoginForm;
