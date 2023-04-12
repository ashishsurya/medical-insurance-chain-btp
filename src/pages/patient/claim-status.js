import { useEffect, useState } from 'react';
import PatientDashboardLayout from '../../components/layouts/PatientDashboardLayout';
import PatientStatusClaimCard from '../../components/PatientStatusClaimCard';
import { getTreatmentDetailsFromUser } from '../../../middlewares/getTreatmentDetailsFromUser';
import { generateHash } from '../../utils/generateHash';
import { toast } from 'react-hot-toast';
import Spinner from '../../components/customs/Spinner';

export default function PatientClaimStatusPage() {
  const [insuranceClaims, setInsuranceClaims] = useState([]);
  const [loading, setLoading] = useState(false);

  // loading all insurance claims of current user
  useEffect(() => {
    setLoading(true);
    const currUser = JSON.parse(localStorage.getItem('currUser'));

    const { name, aadhaarNumber, dob } = currUser;

    const hash = generateHash(`${name} ${aadhaarNumber} ${dob}`);

    const getInsuranceClaims = async () =>
      await getTreatmentDetailsFromUser(hash);

    getInsuranceClaims()
      .then((data) => {
        if (data === 'Something went wrong....') {
          toast.error(data);
        } else {
          setInsuranceClaims(data);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  console.log(insuranceClaims)

  return (
    <PatientDashboardLayout>
      <h1 className='text-center pt-9 text-4xl text-primary tracking-tighter'>
        Check all your insurance claims
      </h1>
      {loading ? (
        <div className='flex items-center justify-center w-full h-full'>
          <Spinner />
        </div>
      ) : (
        <div className='grid grid-cols-2 gap-3 p-3'>
          <PatientStatusClaimCard />
          <PatientStatusClaimCard />
          <PatientStatusClaimCard />
          <PatientStatusClaimCard />
          <PatientStatusClaimCard />
        </div>
      )}
    </PatientDashboardLayout>
  );
}
