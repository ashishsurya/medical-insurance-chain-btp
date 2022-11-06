import Head from 'next/head';
import Image from 'next/image';
import CustomDashboardLink from '../customs/CustomDasboardLink';

const PatientDashboardLayout = (props) => {
  // authenticate using use effect.
  console.log(props);
  return (
    <div className='h-screen p-4'>
      <Head>
        <title>Patient - Medical Insurance Chain</title>
      </Head>
      <div
        id='patient-dashboard-container'
        className=' h-full rounded-xl shadow bg-white flex'
      >
        <div
          id='side-navbar-patient'
          className='flex-[0.2] bg-primary rounded-l-xl flex flex-col items-center py-5 space-y-4'
        >
          <Image
            src='/healthcare.svg'
            alt='logo'
            width={0}
            height={0}
            className='w-12 h-12'
          />
          <CustomDashboardLink href={'/patient'} label='Register' />
          <CustomDashboardLink href={'/patient/status-of-payment'} label='Status of Payment' />
          <CustomDashboardLink
            href={'/patient/claim-status'}
            label='Claim Status'
          />
        </div>
        <div className='flex-[0.8]'>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default PatientDashboardLayout;
