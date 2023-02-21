import { ConnectButton } from '@rainbow-me/rainbowkit';
import CustomInput from './customs/CustomInput';
import Link from 'next/link';

const PatientRegistrationForm = ({
  register,
  handleSubmit,
  registerUser,
  loadingState,
}) => {
  return (
    <div className='text-black'>
      <form
        className='flex space-y-4 flex-col m-5'
        onSubmit={handleSubmit(registerUser)}
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
          placeholder={"XXXX-XXXX-XXXX"}
        />
        <ConnectButton label='Connect To Wallet' chainStatus={"full"} accountStatus={"full"} />
        <p className='text-center text-sm text-gray-500'>Already having an account login <Link href={"/login/patient"}>here</Link></p>
        <button>Register</button>
      </form>
    </div>
  );
};

export default PatientRegistrationForm;
