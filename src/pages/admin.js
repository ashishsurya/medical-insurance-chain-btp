import React, { useCallback } from 'react';
import { deployInsuranceCompany } from '../../middlewares/deployInsuranceCompany';
import { addHospital } from '../../middlewares/addHospital';
import { toast } from 'react-hot-toast';

const AdminPage = () => {
  const handleDeployInsuranceCompany = useCallback(async () => {
    const data = await deployInsuranceCompany(
      {
        name: 'Guardian Shield Insurance',
        terms: `Coverage Fortress
        Shielded Security Insurance
        Sentinel Assurance
        Safeguard Protector
        ArmorCare Insurance
        Fortified Coverage Solutions
        Guardian Fortress Assurance
        DefendSure Insurance
        Watchful Eye Protection
        ShieldGuard Insurance Services`,
        price: '1800',
        hospitals: [],
        userHashes: [],
      },
      '0x479dE3937197D38cFf4FF46Bdee6Df8b066346F9'
    );
    console.log(data);
    if (data === 'Something went wrong....') {
      toast.error('Something went wrong');
    } else {
      toast.success('Insurance company added successfully');
    }
  }, []);

  const handleAddHospital = useCallback(async () => {
    const data = await addHospital();
    console.log(data);
    if (data === 'Something went wrong....') {
      toast.error('Something went wrong');
    } else {
      toast.success('Hospital added successfully');
    }
  }, []);

  return (
    <div className='flex items-center flex-col space-y-5 justify-center min-h-screen'>
      <button onClick={handleDeployInsuranceCompany}>
        Deploy Insurance company
      </button>

      <button onClick={handleAddHospital}>
        Add hospital to insurance company
      </button>
    </div>
  );
};

export default AdminPage;
