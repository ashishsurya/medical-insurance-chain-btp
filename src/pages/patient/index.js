import { useForm } from 'react-hook-form';
import PatientDashboardLayout from '../../components/layouts/PatientDashboardLayout';
import CustomInput from '../../components/customs/CustomInput';
import CustomSelect from '../../components/customs/CustomSelect';

export default function RegisterPatient() {
  const registerPatientForm = useForm();
  const registerPatient = (data) => {
    console.log(data);
  };
  return (
    <PatientDashboardLayout>
      <div className='flex items-center justify-center h-full'>
        <div className=' w-1/2'>
          <h2 className='font-bold tracking-tight text-3xl text-primary my-3'>
            Register Yourself
          </h2>
          <form
            className='flex flex-col space-y-3'
            onSubmit={registerPatientForm.handleSubmit(registerPatient)}
          >
            <CustomInput
              register={registerPatientForm.register}
              label='Insurance Policy'
              formKey={'insurancePolicy'}
            />
            <CustomInput
              register={registerPatientForm.register}
              label='Policy Number'
              formKey={'policyNumber'}
            />
            <CustomInput
              register={registerPatientForm.register}
              label='Cost of Policy'
              formKey={'insurancePolicy'}
            />
            {/* one more field need to be added. */}
            <CustomSelect
              register={registerPatientForm.register}
              formkey='approvedHospital'
              label={'Approved Hospital'}
              values={['Hospital-1', 'Hospital-2', 'Hospital-3']}
            />

            <input type='submit' value='pay : XXXX eth' />
          </form>
        </div>
      </div>
    </PatientDashboardLayout>
  );
}
