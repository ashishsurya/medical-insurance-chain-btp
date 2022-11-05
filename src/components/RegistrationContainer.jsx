import {useState} from 'react';
import CustomRadio from './customs/CustomRadio';
import PatientRegistrationForm from "./PatientRegistrationForm"
import HospitalRegistrationForm from "./HospitalRegistrationForm";
import {useForm} from "react-hook-form";

const RegisterForm = () => {
    const [userType, setUserType] = useState('Patient');
    const {
        register,
        handleSubmit,
    } = useForm();

    const registerUser = (data) => {
        console.log(data);
    };

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
            {
                (userType === "Patient") ? <PatientRegistrationForm register={register}
                                                                    handleSubmit={handleSubmit}
                                                                    registerUser={registerUser}/> : (userType === "Hospital") ?
                    <HospitalRegistrationForm register={register} handleSubmit={handleSubmit}
                                              registerUser={registerUser}/> :
                    <PatientRegistrationForm/>
            }
        </div>
    );
};

export default RegisterForm;
