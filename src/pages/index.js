import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLayoutEffect } from 'react';

export default function Home() {
  const router = useRouter();
  useLayoutEffect(() => {
    // redirect the user based on localstorage.
    router.push('/register');
  }, [router]);
  return (
    <>
      <h1 className='text-primary'>Hello World</h1>
      <Link href='/register'> Register</Link>
    </>
  );
}
