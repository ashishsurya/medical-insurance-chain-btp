import { useForm } from 'react-hook-form';
import PatientDashboardLayout from '../../components/layouts/PatientDashboardLayout';
import CustomInput from '../../components/customs/CustomInput';
import CustomSelect from '../../components/customs/CustomSelect';
import { useEffect, useMemo, useState } from 'react';

const fakeData = [
  {
    policyId: '1',
    policyName: 'ABC Policy',
    policyCost: 'abc ETH',
    hospitals: ['ABC Hospital', 'James Hospital'],
  },
  {
    policyId: '2',
    policyName: 'XYZ Policy',
    policyCost: 'xyz ETH',
    hospitals: ["ST Rocky's Hospital", '24x7 Hospitals'],
  },
];

export default function RegisterPatient() {
  const [policies, setPolicies] = useState(fakeData);
  const [currPolicyId, setCurrPolicyId] = useState(policies[0].policyId);

  const selectedPolicyCost = useMemo(() => {
    return policies.find((policy) => policy.policyId === currPolicyId)
      ?.policyCost;
  }, [currPolicyId, policies]);

  const selectedPolicyHospitals = useMemo(() => {
    return policies.find((policy) => policy.policyId === currPolicyId)
      .hospitals;
  }, [currPolicyId, policies]);

  return (
    <PatientDashboardLayout>
      <div className='flex items-center justify-center h-full'>
        <div className=' w-1/2'>
          <h2 className='font-bold text-center tracking-tighter text-4xl text-primary my-8'>
            Register for an Insurance Policy
          </h2>
          <div
            className='flex flex-col space-y-3'
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className='flex flex-col '>
              <label htmlFor='policyname'>Select a policy</label>
              <select
                className='mt-1'
                id='policyname'
                value={currPolicyId}
                onChange={(e) => {
                  setCurrPolicyId(e.target.value);
                }}
              >
                {fakeData.map((policy) => (
                  <option value={policy.policyId} key={policy.policyId}>
                    {policy.policyId} : {policy.policyName}
                  </option>
                ))}
              </select>
            </div>
            <hr />
            <div className='flex flex-col '>
              <p>
                <span className='font-semibold  '>Policy Cost : </span>
                {selectedPolicyCost}
              </p>
            </div>
            <hr />
            <p className='font-semibold'>
              List of hospitals for the selected policy
            </p>
            {selectedPolicyHospitals.map((hosp) => (
              <li key={hosp} className='pl-4'>{hosp}</li>
            ))}
            <button
              onClick={() => {
                // TODO : to be implemented
              }}
            >
              Pay : {selectedPolicyCost}
            </button>
          </div>
        </div>
      </div>
    </PatientDashboardLayout>
  );
}
