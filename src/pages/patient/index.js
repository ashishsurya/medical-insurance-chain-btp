import { useForm } from 'react-hook-form';
import PatientDashboardLayout from '../../components/layouts/PatientDashboardLayout';
import CustomInput from '../../components/customs/CustomInput';
import CustomSelect from '../../components/customs/CustomSelect';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getInsuranceCompanyInfos } from '../../../middlewares/getInsuranceCompanyInfos';
import { insurancecompanies } from '../../../data/insurancecompany';
import Spinner from '../../components/customs/Spinner';
import { getMoney } from '../../../middlewares/getMoney';

export default function RegisterPatient() {
  const [currInsuranceId, setCurrInsuranceId] = useState();
  const [loading, setLoading] = useState(false);
  const [insuranceCompanies, setInsuranceCompanies] = useState();
  const [insuranceCompanyHospitals, setInsuranceCompanyHospitals] = useState();
  const [insuranceCompanyCost, setInsuranceCompanyCost] = useState();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setInsuranceCompanies(insurancecompanies);
      setLoading(false);
    }, 1500);
  }, [insuranceCompanies, insuranceCompanyCost]);

  useEffect(() => {
    if (insuranceCompanies && insuranceCompanies.length > 0) {
      setCurrInsuranceId(insuranceCompanies[0].address);
      setInsuranceCompanyHospitals(insuranceCompanies[0].hospitals);
      setInsuranceCompanyCost(insuranceCompanies[0].price);
    }
  }, [insuranceCompanies]);

  console.log(insuranceCompanies);

  return (
    <PatientDashboardLayout>
      <div className='flex items-center justify-center h-full'>
        <div className=' w-1/2'>
          <h2 className='font-bold text-center tracking-tighter text-4xl text-primary my-8'>
            Register for an Insurance Policy
          </h2>
          {loading ? (
            <div className='flex items-center justify-center w-full h-full'>
              <Spinner />
            </div>
          ) : (
            <div className='flex flex-col space-y-3'>
              <div className='flex flex-col '>
                <label htmlFor='insurancecompany'>
                  Select an insurance company
                </label>
                <select
                  className='mt-1'
                  id='insurancecompany'
                  value={currInsuranceId}
                  onChange={(e) => {
                    setCurrInsuranceId(e.target.value);
                  }}
                >
                  {insuranceCompanies?.map((insuranceCompany) => (
                    <option
                      value={insuranceCompany.address}
                      key={insuranceCompany.address}
                    >
                      {insuranceCompany.name}
                    </option>
                  ))}
                </select>
              </div>
              <hr />
              <div className='flex flex-col '>
                <p>
                  <span className='font-semibold  '>Insurance Cost : </span>
                  {insuranceCompanyCost}
                </p>
              </div>
              <hr />
              <p className='font-semibold'>
                List of hospitals for the selected policy
              </p>
              {insuranceCompanyHospitals?.map((hosp) => (
                <li key={hosp} className='pl-4'>
                  {hosp}
                </li>
              ))}
              <button
                onClick={async () => {
                  await getMoney(insuranceCompanyCost)
                }}
              >
                Pay : {insuranceCompanyCost}
              </button>
            </div>
          )}
        </div>
      </div>
    </PatientDashboardLayout>
  );
}
