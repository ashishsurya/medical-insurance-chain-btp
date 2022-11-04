import { useForm } from 'react-hook-form';
import {
  MdPerson,
  MdOutlineEmail,
  MdLocalPhone,
  MdHome,
  MdAccountBalanceWallet,
} from 'react-icons/md';
import CustomInput from './customs/CustomInput';
import { useState } from 'react';
import CustomRadio from './customs/CustomRadio';

const RegisterForm = () => {
  const [userType, setUserType] = useState('Patient');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerUser = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <div className='text-black flex flex-col items-center py-4 '>
      <h2 className='text-primary text-4xl font-bold'>Create Account</h2>
      <div className='flex space-x-4 my-5'>
        <CustomRadio
          label={'Patient'}
          name='user-type'
          setUserType={setUserType}
          userType={userType}
        />
        <CustomRadio
          label={'Hospital'}
          name='user-type'
          setUserType={setUserType}
          userType={userType}
        />
        <CustomRadio
          label={'Insurance Company'}
          name='user-type'
          setUserType={setUserType}
          userType={userType}
        />
      </div>
      <form
        className=' w-1/2 flex flex-col space-y-4 mt-4 overflow-scroll'
        onSubmit={handleSubmit(registerUser)}
      >
        <CustomInput
          label={'Full Name'}
          Icon={MdPerson}
          register={register}
          formKey='fullname'
          errors={errors}
        />
        <CustomInput
          label={'Email'}
          Icon={MdOutlineEmail}
          register={register}
          formKey='email'
          errors={errors}
        />
        <CustomInput
          label={'Ph No'}
          Icon={MdLocalPhone}
          register={register}
          formKey='phNo'
          errors={errors}
          minLength={10}
          maxLength={10}
        />
        <CustomInput
          label={'Address'}
          Icon={MdHome}
          register={register}
          formKey='address'
          errors={errors}
        />
        <CustomInput
          label={'Wallet Address'}
          Icon={MdAccountBalanceWallet}
          register={register}
          formKey='walletAddress'
          errors={errors}
          notFullWidth
        />
        <CustomInput
          label={'Date of Birth'}
          Icon={MdAccountBalanceWallet}
          register={register}
          formKey='DOB'
          errors={errors}
          type='date'
        />
        <button
          type='submit'
          className='bg-primary hover:bg-primary text-white p-3 font-medium rounded-xl'
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
