import { useEffect, useState } from 'react';
import HospitalPatientStatusCard from '../../components/HospitalPatientStatusCard';
import HospitalDashboardLayout from '../../components/layouts/HospitalDashboardLayout';
import { treatments } from '../../../data/hopspital/treatments';
import Spinner from '../../components/customs/Spinner';

export default function HospitalStatusOfPatientsPage() {
  const [hospitalTreatments, sethospitalTreatments] = useState();
  const [loading, setLoading] = useState(false);

  const updateStatus = (treatmentId,inputvalue) => {
    sethospitalTreatments((prev) =>
      prev.map((treatment) => {
        if (treatment.treatmentId === treatmentId) {
          return { ...treatment, status: inputvalue };
        }
        return treatment;
      })
    );
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      sethospitalTreatments(treatments);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <HospitalDashboardLayout>
      {loading ? (
        <div className='flex items-center justify-center w-full h-full'>
          <Spinner />
        </div>
      ) : (
        <div className='grid grid-cols-2 p-3 gap-3'>
          {hospitalTreatments &&
            hospitalTreatments.map((treatment) => (
              <StatuofPaymentComponent
                key={treatment.treatmentId}
                {...treatment}
                updateStatus={updateStatus}
              />
            ))}
        </div>
      )}
    </HospitalDashboardLayout>
  );
}

const StatuofPaymentComponent = ({
  treatmentId,
  status,
  cost,
  approved,
  patientId,
  updateStatus,
}) => {
  const [inputvalue, setInputvalue] = useState('');

  return (
    <div
      className='grid border gap-5 border-primary p-4 rounded-lg place-items-center'
      key={treatmentId}
    >
      <p className='text-ellipsis'>
        Patient Id : {patientId.substring(0, 5)}......
      </p>
      <p>Cost : {cost}</p>
      <p>Status : {status}</p>
      <p>Approved : {approved ? 'Yes' : 'No'}</p>
      <div className='flex '>
        <input
          type='text'
          value={inputvalue}
          onChange={(e) => setInputvalue(e.target.value)}
        />
        <button
          onClick={() => {
            updateStatus(treatmentId, inputvalue);
          }}
        >
          Submit Status
        </button>
      </div>
    </div>
  );
};

// { treatmentId, status, cost, approved, patientId }
