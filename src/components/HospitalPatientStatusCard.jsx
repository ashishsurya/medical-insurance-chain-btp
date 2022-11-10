import CustomStat from '../components/customs/CustomStat';
import StatusIndicator from '../components/customs/StatusIndicator';

const HospitalPatientStatusCard = () => {
  return (
    <div className='p-2 bg-gray-100 shadow hover:shadow-lg rounded-xl grid grid-cols-2 gap-3 '>
      <CustomStat label={'Patient Id'} />
      <StatusIndicator />
      <CustomStat label={'Symptoms'} />
      <CustomStat label={'Estimated Cost'} />
      <button>Start Check Up</button>
    </div>
  );
};

export default HospitalPatientStatusCard;
