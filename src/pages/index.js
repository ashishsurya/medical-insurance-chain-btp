import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className='text-primary'>Hello World</h1>
      <Link href='/register'> Register</Link>
    </>
  );
}
