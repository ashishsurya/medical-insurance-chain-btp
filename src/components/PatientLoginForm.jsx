/* eslint-disable react/no-unescaped-entities */
import { ConnectButton } from '@rainbow-me/rainbowkit';
import CustomInput from './customs/CustomInput';
import Link from 'next/link';

export default function PatientLoginForm({
  register,
  handleSubmit,
  loginUser,
}) {
  return (
    <div className='text-black my-[100px]'>
      <form
        className='flex space-y-4 flex-col m-5'
        onSubmit={handleSubmit(loginUser)}
      >
        <CustomInput
          label={'Full Name'}
          formKey={'fullName'}
          register={register}
        />
        <CustomInput
          label={'Date of Birth'}
          formKey={'dob'}
          type={'date'}
          register={register}
        />
        <CustomInput
          label={'Aadhaar Number'}
          formKey={'aadhaarNumber'}
          register={register}
          placeholder={'XXXX-XXXX-XXXX'}
        />
        <ConnectButton
          label='Connect To Wallet'
          chainStatus={'full'}
          accountStatus={'full'}
        />
        <p className='text-center text-sm text-gray-500'>
          Don't have an account create one{' '}
          <Link href={'/login/patient'}>here</Link>
        </p>
        <button>Login</button>
      </form>
    </div>
  );
}
