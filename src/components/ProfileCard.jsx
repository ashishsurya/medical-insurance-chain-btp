/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { BiUser } from 'react-icons/bi';

const ProfileCard = ({ img_src, name }) => {
  return (
    <div className='bg-primary  bg-opacity-75 p-3 flex items-center text-white'>
      {img_src ? <img src={img_src} alt='user-logo' /> : <BiUser className="w-10 h-10"/>}
      <h4 className=' font-medium tracking-tighter'>{name}</h4>
    </div>
  );
};

export default ProfileCard;
