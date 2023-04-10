import { useRecoilState } from 'recoil';
import { loginSwitchAtom } from '../atoms/loginSwitchAtom';
import { useCallback, useMemo } from 'react';

export default function LoginSwitch() {
  const [currAuthParty, setCurrAuthParty] = useRecoilState(loginSwitchAtom);

  const isHospital = useMemo(
    () => currAuthParty === 'Hospital',
    [currAuthParty]
  );
  const isPatient = useMemo(() => currAuthParty === 'Patient', [currAuthParty]);
  const isInsuranceCompany = useMemo(
    () => currAuthParty === 'InsuranceCompany',
    [currAuthParty]
  );

  const handleLoginSwitch = useCallback(
    (party) => {
      setCurrAuthParty(party);
    },
    [setCurrAuthParty]
  );

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
