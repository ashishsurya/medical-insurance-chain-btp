import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import CustomDashboardLink from '../customs/CustomDasboardLink';
import ProfileCard from '../ProfileCard';

const HospitalDashboardLayout = (props) => {
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
            <CustomDashboardLink href={'/hospital'} label='Add New Patient +' />
            <CustomDashboardLink
              href={'/hospital/status-of-patients'}
              label='Status of Patients'
            />
            <CustomDashboardLink href={'/hospital/check-ups'} label='Check Ups' />
            <CustomDashboardLink href={'/hospital/approval-status'} label='Approval Status' />
          </div>
          <div className='flex-[0.8]'>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDashboardLayout;
