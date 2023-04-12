import { useEffect, useState } from 'react';
import PatientDashboardLayout from '../../components/layouts/PatientDashboardLayout';
import PatientStatusClaimCard from '../../components/PatientStatusClaimCard';
import { getTreatmentDetailsFromUser } from '../../../middlewares/getTreatmentDetailsFromUser';
import { generateHash } from '../../utils/generateHash';
import { toast } from 'react-hot-toast';
import Spinner from '../../components/customs/Spinner';
import { treatments } from '../../../data/treatmentsdata';

export default function PatientClaimStatusPage() {
  const [treatmentsData, setTreatmentsData] = useState();
  const [loading, setLoading] = useState(false);

  // loading all insurance claims of current user
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setTreatmentsData(treatments);
      setLoading(false);
    }, 1500);
  }, []);

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
        <div className='grid grid-cols-2 gap-3 p-3 pt-8'>
          {treatmentsData &&
            treatmentsData.map((treatmentData) => {
              return (
                <div
                  className='grid border border-primary p-4 rounded-lg place-items-center'
                  key={treatmentData.treatmentID}
                >
                  <p>Hospital Name :{treatmentData.hospitalName} </p>
                  <p>Cost : {treatmentData.cost}</p>
                  <p>Status : {treatmentData.status}</p>
                </div>
              );
            })}
        </div>
      )}
    </PatientDashboardLayout>
  );
}
