import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className=' h-screen bg-white flex flex-col items-center justify-center p-5 space-y-6'>
        <h2 className='text-primary text-4xl font-semibold'>
          MediBlock: Medical Insurance Blockchain
        </h2>
        <div className='grid grid-cols-3 self-stretch gap-5 place-items-center'>
          <CategoryTile title={'Patient'} />
          <CategoryTile title={'Hospital'} />
          <CategoryTile title={'Insurance Co'} />
        </div>
      </div>
    </>
  );
}

const CategoryTile = ({ title }) => {
  return (
    <div className='bg-primary text-white font-medium w-52 h-52 flex items-center justify-center text-3xl rounded-lg' >
      <h3>{title}</h3>
    </div>
  );
};
