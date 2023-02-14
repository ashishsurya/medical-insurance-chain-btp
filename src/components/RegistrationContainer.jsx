import { useState } from 'react';
import CustomRadio from './customs/CustomRadio';
import PatientRegistrationForm from './PatientRegistrationForm';
import HospitalRegistrationForm from './HospitalRegistrationForm';
import { useForm } from 'react-hook-form';
import { useAccount } from 'wagmi';

const RegisterForm = () => {
  const [userType, setUserType] = useState('Patient');
  const {address} = useAccount()
  const patientForm = useForm();
  const hospitalForm = useForm();

  console.log(address)

  const registerUser = (data) => {
    // make an api call to the backend and get the response back and respond based in the response.
  };

  return (
    <div className='text-black flex flex-col items-center py-4 '>
      <h2 className='text-primary text-4xl font-bold '>Create Account</h2>
      <p>and Secure the medical industry</p>
      <div className='flex space-x-4 mt-5'>
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
      </div>
      {userType === 'Patient' ? (
        <PatientRegistrationForm
          register={patientForm.register}
          handleSubmit={patientForm.handleSubmit}
          registerUser={registerUser}
        />
      ) : userType === 'Hospital' ? (
        <HospitalRegistrationForm
          register={hospitalForm.register}
          handleSubmit={hospitalForm.handleSubmit}
          registerUser={registerUser}
        />
      ) : null}
    </div>
  );
};

export default RegisterForm;
