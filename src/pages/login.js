import {  Web3Button } from '@web3modal/react';
import Image from 'next/image';
import { useAccount } from 'wagmi';

export default function LoginPage() {
  return (
    <div className='flex  h-screen rounded-xl items-center justify-center'>
      <LoginForm />
    </div>
  );
}

const LoginForm = () => {
  const {
    isConnected,address
  } = useAccount();

  async function loginUser(e) {
    // call an api and set tokens using localstorage
    localStorage.setItem('userdata' , "data coming from server")
    e.preventDefault();
  }

  return (
    <form
      className='flex bg-white flex-col space-y-3 w-1/2  p-8  justify-center'
      onSubmit={loginUser}
    >
      <h2 className='text-primary font-bold tracking-tight text-3xl text-center'>
        Login to your account, at one go
      </h2>
      {!isConnected && (
        <p className='text-center text-gray-700'>
          Please connect your wallet, by clicking connect wallet button
        </p>
      )}
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
      <input
        type='submit'
        value='Login'
        className='bg-primary text-white p-2 rounded-xl cursor-pointer'
      />
    </form>
  );
};
