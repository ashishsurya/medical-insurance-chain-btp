import React from 'react';
import CustomStat from '../components/customs/CustomStat';
import StatusIndicator from "../components/customs/StatusIndicator"

const PatientStatusClaimCard = ({
  patientId,
  patientName,
  approvedHospital,
  symptoms,
  estimatedLockCost,
  status,
}) => {
  return (
    <div className="grid grid-cols-2 p-2 bg-gray-100 rounded-lg shadow hover:shadow-lg gap-2">
      <CustomStat label={"Patient Id"} />
      <StatusIndicator label={"Patient Id"}/>
      <CustomStat label={"Patient Name"}/>
      <CustomStat label={"Approved Hospital"}/>
      <CustomStat label={"Symptoms"}/>
      <CustomStat label={"Estimated Lock Cost"}/>

      
    </div>
  );
};

export default PatientStatusClaimCard;
