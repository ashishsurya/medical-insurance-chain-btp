import {useForm} from "react-hook-form";
import {
    MdPerson,
    MdOutlineEmail,
    MdLocalPhone,
    MdHome,
    MdAccountBalanceWallet,
} from 'react-icons/md';
import CustomInput from './customs/CustomInput';

const PatientRegistrationForm = ({register,handleSubmit,registerUser}) => {
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
            label={'Address'}
            Icon={MdHome}
            register={register}
            formKey='address'
        />
        <CustomInput
            label={'Wallet Address'}
            Icon={MdAccountBalanceWallet}
            register={register}
            formKey='walletAddress'
            notFullWidth
        />
        <CustomInput
            label={'Date of Birth'}
            Icon={MdAccountBalanceWallet}
            register={register}
            formKey='DOB'
            type='date'
        />
        <button
            type='submit'
            className='bg-primary hover:bg-primary text-white p-3 font-medium rounded-xl'
            >
            Register
        </button>
            </form>
    )
}

export default  PatientRegistrationForm;