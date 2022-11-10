import React from 'react';
import CustomStat from './customs/CustomStat';
import StatusIndicator from './customs/StatusIndicator';

const HospitalCheckUpCard = () => {
  return (
    <div className='p-2 bg-gray-100 shadow hover:shadow-lg rounded-xl grid grid-cols-2 gap-3 '>
      <CustomStat label={'Patient Id'} />
      <CustomStat label={'Estimated Cost'} />
      <CustomStat label={'Symptoms'} />

      <CustomStat label={'Lock Estimated Cost'} />
      <CustomStat label={'Bill'} />
      <CustomStat label={'Final Estimated Cost'} />
      <CustomStat label={'Prescription'} />
      <button>Send</button>
    </div>
  );
};

export default HospitalCheckUpCard;
