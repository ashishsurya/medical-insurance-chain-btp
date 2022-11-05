import CustomInput from "./customs/CustomInput";
import {MdHome, MdLocalPhone, MdOutlineEmail, MdPerson} from "react-icons/md";

const HospitalRegistrationForm = ({register, handleSubmit, registerUser}) => {
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
            <select className="p-2 border focus:border-primary border-2" {...register("hospitalType" , {required:true})}>
                <option value="government">Government</option>
                <option value="private">Private</option>
                <option value="government">Government</option>

            </select>
            <button
                type='submit'
                className='bg-primary hover:bg-primary text-white p-3 font-medium rounded-xl'
            >
                Register
            </button>
        </form>
    )
}


export default HospitalRegistrationForm;