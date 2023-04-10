import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';

const InsuranceLoginForm = () => {



  return (
    <div className='flex flex-col space-y-3'>
      <p className=' text-sm tracking-tighter'>👉 : As an insurance company your wallet address is enough to login</p>
      <ConnectButton />
      <button>Login</button>
    </div>
  );
};

export default InsuranceLoginForm;
