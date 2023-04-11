/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { BiUser } from 'react-icons/bi';

const ProfileCard = ({  name }) => {
  return (
    <div className='bg-primary  bg-opacity-75 p-3 flex items-center text-white'>
      <h4 className=' font-medium tracking-tighter'>Welcome, {name}</h4>
    </div>
  );
};

export default ProfileCard;
