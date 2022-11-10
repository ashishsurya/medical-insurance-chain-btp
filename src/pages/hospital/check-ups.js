import HospitalCheckUpCard from '../../components/HospitalCheckUpCard';
import HospitalDashboardLayout from '../../components/layouts/HospitalDashboardLayout';

export default function HospitalCheckUpsPage() {
  return (
    <HospitalDashboardLayout>
      <div className='p-3 grid grid-cols-2 gap-3'>
        <HospitalCheckUpCard />
        <HospitalCheckUpCard />
        <HospitalCheckUpCard />
        <HospitalCheckUpCard />
      </div>
    </HospitalDashboardLayout>
  );
}
