import Head from 'next/head';
import Image from 'next/image';
import React, { useCallback, useEffect } from 'react';
import CustomDashboardLink from '../customs/CustomDasboardLink';
import ProfileCard from '../ProfileCard';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';

const HospitalDashboardLayout = ({children}) => {
  const router = useRouter();
  useEffect(() => {
    const currUser = localStorage.getItem('currUser');
    const userType = localStorage.getItem('userType');
    // if (!(currUser && userType && userType === 'hospital')) {
    //   toast.error('Please login before proceeding.');
    // } else {
    // }
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('currUser');
    localStorage.removeItem('userType');
    router.push('/login');
  }, [router]);

  return (
    <div>
      <div className='h-screen p-4'>
        <Head>
          <title>Hospital - Medical Insurance Chain</title>
        </Head>
        <div
          id='patient-dashboard-container'
          className=' h-full rounded-xl shadow bg-white flex'
        >
          <div
            id='side-navbar-patient'
            className='flex-[0.2] bg-primary rounded-l-xl flex flex-col items-center border py-5 space-y-4'
          >
            <Image
              src='/healthcare.svg'
              alt='logo'
              width={0}
              height={0}
              className='w-12 h-12'
            />
            <ProfileCard name={'Surya Ashish'} />
            <CustomDashboardLink href={'/hospital'} label='Status of treatments' />
            
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className='flex-[0.8]'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDashboardLayout;
