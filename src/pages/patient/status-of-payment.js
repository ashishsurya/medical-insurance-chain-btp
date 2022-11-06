import PatientDashboardLayout from '../../components/layouts/PatientDashboardLayout';
import PatientPaymentStatusClaim from '../../components/PatientPaymentStatusClaim';

export default function PatientStatusPage() {
  return (
    <PatientDashboardLayout>
      {/* list of patients insurances status */}

      <div className=' flex flex-col items-center p-4  gap-5 h-full overflow-scroll no-scrollbar'>
        <PatientPaymentStatusClaim />
        <PatientPaymentStatusClaim />
        <PatientPaymentStatusClaim />
        
      </div>
    </PatientDashboardLayout>
  );
}
