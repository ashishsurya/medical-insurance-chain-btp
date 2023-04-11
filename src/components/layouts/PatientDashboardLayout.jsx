import Head from 'next/head';
import Image from 'next/image';
import CustomDashboardLink from '../customs/CustomDasboardLink';
import ProfileCard from '../ProfileCard';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ConnectButton, useAccountModal } from '@rainbow-me/rainbowkit';
import { toast } from 'react-hot-toast';
import { useAccount } from 'wagmi';

const PatientDashboardLayout = (props) => {
  const [currUser, setCurrUser] = useState();
  const router = useRouter();

  // authenticate using use effect.

  useEffect(() => {
    // no curr user
    const currUser = localStorage.getItem('currUser');
    const userType = localStorage.getItem('userType');
    if (!(currUser && userType && userType === 'patient')) {
      toast('Please login before proceeding.');
      router.replace('/login');
    } else {
      setCurrUser(JSON.parse(currUser));
    }
  }, [router]);

  useEffect(() => {});

  function handleLogout() {
    localStorage.removeItem('currUser');
    localStorage.removeItem('userType');
    toast.success('Logged out successfully');
    router.replace('/login');
  }

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
          className='flex-[0.2] bg-primary rounded-l-xl flex flex-col items-center border py-5 space-y-4'
        >
          <Image
            src='/healthcare.svg'
            alt='logo'
            width={0}
            height={0}
            className='w-12 h-12'
          />
          <ProfileCard name={currUser?.name} />
          <CustomDashboardLink href={'/patient'} label='Register to Policy' />

          <CustomDashboardLink
            href={'/patient/claim-status'}
            label='Claim Status'
          />
          <ConnectButton chainStatus={'icon'} accountStatus={'avatar'} />
          <button title='Logout' onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className='flex-[0.8]'>{props.children}</div>
      </div>
    </div>
  );
};

export default PatientDashboardLayout;
