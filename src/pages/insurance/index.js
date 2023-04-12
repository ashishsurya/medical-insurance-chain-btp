import { toast } from 'react-hot-toast';
import { addHospital } from '../../../middlewares/addHospital';
import InsuranceDashboardLayout from '../../components/layouts/InsuranceDashboardLayout';

const AddHospitalPage = () => {
  const handleAddHospital = async () => {
    const data = await addHospital();
    console.log(data);
    if (data === 'Something went wrong....') {
      toast.error('Something went wrong');
    } else {
      toast.success('Hospital added successfully');
    }
  };

  return (
    <InsuranceDashboardLayout>
      <div className='flex w-3/5 mx-auto justify-center min-h-screen space-y-3 flex-col '>
        <h1 className='text-4xl tracking-tighter text-primary text-center'>
          Add a new hospital
        </h1>
        <input className='py-2 px-4' type='text' placeholder='Hospitals wallet address.....' />
        <button className='' onClick={handleAddHospital}>
          Add Hospital
        </button>
      </div>
    </InsuranceDashboardLayout>
  );
};

export default AddHospitalPage;
