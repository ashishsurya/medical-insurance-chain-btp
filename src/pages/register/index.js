import Head from 'next/head';
import Link from 'next/link';
import RegistrationContainer from '../../components/RegistrationContainer';
import { useEffect, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';

export default function RegisterPage() {

  
}

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination : "/register/patient"
    }
  }
}