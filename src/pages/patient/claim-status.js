import PatientDashboardLayout from '../../components/layouts/PatientDashboardLayout';
import PatientStatusClaimCard from '../../components/PatientStatusClaimCard';

export default function PatientClaimStatusPage() {
  return (
    <PatientDashboardLayout>
      <h1 className='text-center pt-9 text-4xl text-primary tracking-tighter'>Check all your insurance claims</h1>
      <div className="grid grid-cols-2 gap-3 p-3">
        <PatientStatusClaimCard />
        <PatientStatusClaimCard />
        <PatientStatusClaimCard />
        <PatientStatusClaimCard />
        <PatientStatusClaimCard />

      </div>
    </PatientDashboardLayout>
  );
}
