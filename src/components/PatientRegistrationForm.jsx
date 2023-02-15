import {
  MdPerson,
  MdOutlineEmail,
  MdLocalPhone,
  MdHome,
  MdAccountBalanceWallet,
} from 'react-icons/md';
import { FaBirthdayCake } from 'react-icons/fa';
import CustomInput from './customs/CustomInput';
import { Web3Button } from '@web3modal/react';
import { useAccount } from 'wagmi';
import { HiIdentification } from 'react-icons/hi';
import { ClipLoader } from 'react-spinners';

const PatientRegistrationForm = ({
  register,
  handleSubmit,
  registerUser,
  loadingState,
}) => {
  const { address } = useAccount();
  return (
    <form
      className=' w-1/2 flex flex-col space-y-4 mt-4 h-full'
      onSubmit={handleSubmit(registerUser)}
    >
      <CustomInput
        label={'Full Name'}
        Icon={MdPerson}
        register={register}
        formKey='fullname'
      />
      <CustomInput
        label={'Email'}
        Icon={MdOutlineEmail}
        register={register}
        formKey='email'
      />
      <CustomInput
        label={'Ph No'}
        Icon={MdLocalPhone}
        register={register}
        formKey='phNo'
        minLength={10}
        maxLength={10}
      />
      <CustomInput
        label={'Aadhaar Number'}
        Icon={HiIdentification}
        register={register}
        formKey='aadhaarNumber'
      />
      <div className='flex flex-col'>
        <label htmlFor='wallet-address' className=''>
          <span className='inline-block'>
            <MdAccountBalanceWallet className='w-6 h-6' />
          </span>
          Wallet Adress
        </label>
        <div className='flex space-x-2'>
          <input
            className='border p-2 flex-1 rounded-xl cursor-not-allowed'
            type='text'
            id='wallet-address'
            value={address}
            disabled
          />
          <Web3Button />
        </div>
      </div>
      <div className='flex space-x-3'>
        <CustomInput
          label={'Date of Birth'}
          Icon={FaBirthdayCake}
          register={register}
          formKey='DOB'
          type='date'
        />
        <CustomInput
          label={'Former Diseases'}
          register={register}
          formKey='formerDiseases'
          placeholder='Ex . disease1, disease2, .....'
        />
      </div>
      <button className='bg-primary text-white p-2 rounded-xl cursor-pointer' type='submit' value='Register'>
        {loadingState ? <ClipLoader color='white' size={30} /> : 'Register'}
      </button>
    </form>
  );
};

export default PatientRegistrationForm;
