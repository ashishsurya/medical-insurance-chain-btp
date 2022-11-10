import { useForm } from 'react-hook-form';
import CustomInput from '../../components/customs/CustomInput';
import CustomSelect from '../../components/customs/CustomSelect';
import HospitalDashboardLayout from '../../components/layouts/HospitalDashboardLayout';

export default function NewPatientPage() {
  const { register } = useForm();
  
  return (
    <HospitalDashboardLayout>
      <div className='flex items-center justify-center h-full  '>
        <form className='w-1/2 flex flex-col space-y-3'>
          <CustomInput
            register={register}
            label='Patient Id'
            formKey={'pateintId'}
          />
          <CustomSelect
            formkey={'typeOfDisease'}
            label='Type of Disease'
            values={['hereditary', 'infectious', 'deficiency', 'physiological']}
            register={register}
          />
          <CustomSelect
            formkey={'department'}
            label='Department'
            values={['hereditary', 'infectious', 'deficiency', 'physiological']}
            register={register}
          />
          <CustomInput
            register={register}
            label='Symptoms'
            formKey={'symptoms'}
          />
          <CustomInput
            register={register}
            label='Estimated Cost'
            formKey={'estimatedCost'}
          />
          <input type='submit' value='Lock' />
        </form>
      </div>
    </HospitalDashboardLayout>
  );
}
