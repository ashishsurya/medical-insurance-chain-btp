import HospitalPatientStatusCard from '../../components/HospitalPatientStatusCard';
import HospitalDashboardLayout from '../../components/layouts/HospitalDashboardLayout';

export default function HospitalStatusOfPatientsPage() {
  return (
    <HospitalDashboardLayout>
      <div className='grid grid-cols-2 p-3 gap-3'>
        <HospitalPatientStatusCard />
        <HospitalPatientStatusCard />
        <HospitalPatientStatusCard />
        <HospitalPatientStatusCard />
      </div>
    </HospitalDashboardLayout>
  );
}
