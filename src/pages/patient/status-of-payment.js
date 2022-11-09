import PatientDashboardLayout from '../../components/layouts/PatientDashboardLayout';
import PatientPaymentStatusCard from '../../components/PatientPaymentStatusCard';

export default function PatientStatusPage() {
  return (
    <PatientDashboardLayout>
      {/* list of patients insurances status */}

      <div className=' grid grid-cols-2 p-4   gap-5 h-full overflow-scroll no-scrollbar'>
        <PatientPaymentStatusCard /> {/* for now all values are hard-coded */}
        <PatientPaymentStatusCard status={'isOk'} />{' '}
        {/* for now all values are hard-coded */}
        <PatientPaymentStatusCard />
        {/* for now all values are hard-coded */}
        <PatientPaymentStatusCard /> {/* for now all values are hard-coded */}
        <PatientPaymentStatusCard status={'isOk'} />{' '}
        {/* for now all values are hard-coded */}
        <PatientPaymentStatusCard />
        <PatientPaymentStatusCard /> {/* for now all values are hard-coded */}
        <PatientPaymentStatusCard status={'isOk'} />{' '}
        {/* for now all values are hard-coded */}
        <PatientPaymentStatusCard />
        <PatientPaymentStatusCard /> {/* for now all values are hard-coded */}
        <PatientPaymentStatusCard status={'isOk'} />{' '}
        {/* for now all values are hard-coded */}
        <PatientPaymentStatusCard />
        <PatientPaymentStatusCard /> {/* for now all values are hard-coded */}
        <PatientPaymentStatusCard status={'isOk'} />{' '}
        {/* for now all values are hard-coded */}
        <PatientPaymentStatusCard />
      </div>
    </PatientDashboardLayout>
  );
}
