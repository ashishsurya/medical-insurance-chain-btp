import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';

const HospitalLoginForm = () => {
  const handleHospitalLogin = async () => {
    // TODO : 
  };
  return (
    <form
      onSubmit={handleHospitalLogin}
      className='w-full flex flex-col space-y-3'
    >
      <ConnectButton />
      <button className='w-full px-4 py-2 text-white bg-primary hover:bg-opacity-95 duration-500'>
        Login
      </button>
    </form>
  );
};

export default HospitalLoginForm;
