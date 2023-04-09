import { useRecoilState } from 'recoil';
import { loginSwitchAtom } from '../atoms/loginSwitchAtom';
import { useCallback, useMemo } from 'react';

export default function LoginSwitch() {
  const [currLogin, setCurrentLogin] = useRecoilState(loginSwitchAtom);

  const isHospital = useMemo(() => currLogin === 'Hospital', [currLogin]);
  const isPatient = useMemo(() => currLogin === 'Patient', [currLogin]);
  const isInsuranceCompany = useMemo(
    () => currLogin === 'InsuranceCompany',
    [currLogin]
  );

  const handleLoginSwitch = useCallback(
    (party) => {
      setCurrentLogin(party);
    },
    [setCurrentLogin]
  );

  console.log(isHospital, isPatient, isInsuranceCompany);

  return (
    <div className='flex items-center space-x-3 bg-[#ddd] text-sm p-2 rounded-lg duration-200 transition-all'>
      <p
        onClick={() => handleLoginSwitch('Hospital')}
        className={`bg-[#fff] p-2 rounded-lg cursor-pointer ${
          isHospital && 'bg-primary text-white font-medium tracking-tighter'
        }`}
      >
        Hospital
      </p>
      <p
        onClick={() => handleLoginSwitch('Patient')}
        className={`bg-[#fff] p-2 rounded-lg cursor-pointer ${
          isPatient && 'bg-primary text-white font-medium tracking-tighter'
        }`}
      >
        Patient
      </p>
      <p
        onClick={() => handleLoginSwitch('InsuranceCompany')}
        className={`bg-[#fff] p-2 rounded-lg cursor-pointer ${
          isInsuranceCompany &&
          'bg-primary text-white font-medium tracking-tighter'
        }`}
      >
        Insurance Company
      </p>
    </div>
  );
}
