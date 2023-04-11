import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useAccount } from 'wagmi';
import { createHash } from 'crypto';
import { registerPatientContract } from '../../../middlewares/registerPatientContract';

const PatientRegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const { isConnected,address } = useAccount();
  const router = useRouter();

  const registerPatient = useCallback(
    async (data) => {
      if (!isConnected) {
        toast.error('Connect to wallet before loggin in.');
        return;
      }
      const { name, aadhaarNumber, dob } = data;
      const hash =
        '0x' +
        createHash('sha256')
          .update(`${name} ${aadhaarNumber} ${dob}`)
          .digest('hex');
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
    },
    [isConnected, router]
  );

  return (
    <form
      onSubmit={handleSubmit(registerPatient)}
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
        className='w-full px-4 py-2 text-white bg-primary hover:bg-opacity-80 duration-500'
      >
        Register
      </button>
    </form>
  );
};

export default PatientRegisterForm;
