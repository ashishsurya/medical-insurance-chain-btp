import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';

const HospitalRegistration = () => {
  return (
    <div className='flex flex-col space-y-3'>
      <ConnectButton />
      <button>Register</button>
    </div>
  );
};

export default HospitalRegistration;
