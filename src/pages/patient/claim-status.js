import PatientDashboardLayout from '../../components/layouts/PatientDashboardLayout';
import PatientStatusClaimCard from '../../components/PatientStatusClaimCard';

export default function PatientClaimStatusPage() {
  return (
    <PatientDashboardLayout>
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
