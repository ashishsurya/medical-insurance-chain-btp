import Link from 'next/link';
import { useRouter } from 'next/router';

const CustomDashboardLink = ({ href, label }) => {
  const { asPath } = useRouter();
  const isActiveLink = asPath === href;
  console.log(asPath)
  return (
    <Link href={href}>
      <p className={`${isActiveLink ? "bg-white text-primary font-semibold" :"bg-primary text-white"} px-3 py-2 border rounded-xl `}>{label}</p>
    </Link>
  );
};

export default CustomDashboardLink;
