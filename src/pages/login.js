import { Web3Button } from '@web3modal/react';
import Image from 'next/image';
import { useAccount } from 'wagmi';
import ClipLoader from 'react-spinners/ClipLoader';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className='flex  h-screen rounded-xl items-center justify-center'>
      <LoginForm />
    </div>
  );
}

const LoginForm = () => {
  const { isConnected, address } = useAccount();
  const [loadingState, setLoadingState] = useState(false);

  async function loginUser(e) {
    // call an api and set tokens using localstorage
    e.preventDefault();
    setLoadingState(true);
    // TODO : Call the smart contract and get the users public hash and store them in 
    setTimeout(() => {
      setLoadingState(false);
    }, 2000);
  }

  return (
    <form
      className='flex bg-white flex-col space-y-3 w-1/2  p-8  justify-center'
      onSubmit={loginUser}
    >
      <h2 className='text-primary font-bold tracking-tight text-3xl text-center'>
        Login to your account, at one go
      </h2>
      {/* {!isConnected && (
        <p className='text-center text-gray-700'>
          Please connect your wallet, by clicking connect wallet button
        </p>
      )} */}
      <label htmlFor='wallet-address-input' className='text-lg font-semibold'>
        Wallet Address
      </label>
      <div className='flex space-x-2 items-center'>
        <input
          type='text'
          id='wallet-address-input'
          className='p-3 rounded-xl flex-1 cursor-not-allowed'
          value={address}
          readOnly
        />
        <Web3Button />
      </div>
      <button
        type='submit'
        className='bg-primary text-white p-2 rounded-xl cursor-pointer'
      >
        {loadingState ? (
          <ClipLoader loading={true} color='white' size={30} />
        ) : (
          'Login'
        )}
      </button>
      <p className='text-sm'>
        Don&apos;t have an account <Link href={'/register'}>Register Here</Link>
      </p>
    </form>
  );
};
