import HospitalApprovalStatusCard from '../../components/HospitalApprovalStatusCard';
import HospitalDashboardLayout from '../../components/layouts/HospitalDashboardLayout';

export default function HospitalApprovalStatusPage() {
  return (
    <HospitalDashboardLayout>
      <div className='grid grid-cols-2 p-5'>
        <HospitalApprovalStatusCard />
        <HospitalApprovalStatusCard />
        <HospitalApprovalStatusCard />
        <HospitalApprovalStatusCard />
        <HospitalApprovalStatusCard />
      </div>
    </HospitalDashboardLayout>
  );
}
