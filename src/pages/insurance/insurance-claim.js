import { useEffect, useState } from 'react';
import Spinner from '../../components/customs/Spinner';
import InsuranceDashboardLayout from '../../components/layouts/InsuranceDashboardLayout';
import { treatments } from '../../../data/hopspital/treatments';

export default function InsuranceClaimPage() {
  const [loading, setLoading] = useState(false);
  const [insuranceClaims, setInsuranceClaims] = useState();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setInsuranceClaims(treatments);
      setLoading(false);
    }, 1556);
  }, []);

  return (
    <InsuranceDashboardLayout>
      {loading ? (
        <div className='flex items-center justify-center w-full h-full'>
          <Spinner />
        </div>
      ) : (
        <div className='grid grid-cols-2 p-3 gap-3'>
          {insuranceClaims &&
            insuranceClaims.map(
              ({ treatmentId, status, cost, approved, patientId }) => (
                <div
                  className='grid border gap-4 border-primary p-4 rounded-lg place-items-center'
                  key={treatmentId}
                >
                  <p className='text-ellipsis'>
                    Patient Id : {patientId.substring(0, 5)}......
                  </p>
                  <p>Cost : {cost}</p>
                  <p>Status : {status}</p>
                  <p>Approved : {approved ? 'Yes' : 'No'}</p>
                  <button
                    onClick={() => {
                      setInsuranceClaims((prev) =>
                        prev.map((claim) => {
                          if (claim.treatmentId === treatmentId) {
                            return {
                              ...claim,
                              status: 'Approved',
                              approved: true,
                            };
                          }
                          return claim
                        })
                      );
                    }}
                    disabled={approved}
                  >
                    Approve
                  </button>
                </div>
              )
            )}
        </div>
      )}
    </InsuranceDashboardLayout>
  );
}
