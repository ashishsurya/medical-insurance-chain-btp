import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useAccount } from 'wagmi';

const HospitalLoginForm = () => {
  const { isConnected } = useAccount();

  const handleHospitalLogin = async (e) => {
    e.preventDefault();

    if (!isConnected) {
      toast.error('Please connect to a wallet');
      return;
    }

    // TODO :
  };
  return (
    <form
      onSubmit={handleHospitalLogin}
      className='w-full flex flex-col space-y-3'
    >
      <p className=' text-sm tracking-tighter'>
        👉 : As a hospital your wallet address is enough to login
      </p>

      <ConnectButton />
      <button className='w-full px-4 py-2 text-white bg-primary hover:bg-opacity-95 duration-500'>
        Login
      </button>
    </form>
  );
};

export default HospitalLoginForm;
