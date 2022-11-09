import React from 'react';
import CustomStat from './customs/CustomStat';
import StatusIndicator from './customs/StatusIndicator';

const PatientPaymentStatusCard = ({
  amountPaid,
  approvedHospital,
  policyNumber,
  status,
  amount,
}) => {
  return (
    <div className='bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg grid grid-cols-2 gap-4'>
      <CustomStat label={'Amount Paid'} />
      <CustomStat label={'Approved Hospital'} />
      <CustomStat label={'Policy Number'} />
      <button disabled={status === 'isOk'} className='self-center'>
        Renew : XXXXeth
      </button>
      <StatusIndicator status={status} />
    </div>
  );
};

export default PatientPaymentStatusCard;
