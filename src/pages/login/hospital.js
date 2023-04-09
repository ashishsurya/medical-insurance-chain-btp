import { ConnectButton } from '@rainbow-me/rainbowkit';
import LoginLayout from '../../components/layouts/LoginLayout';
import { useAccount } from 'wagmi';
import { toast } from 'react-hot-toast';

export default function HospitalLogin() {
  const { isConnected } = useAccount();

  const handleHospitalLogin = () => {
    if (!isConnected) {
      toast.error('Please connect to a wallet before loggin in.');
      return;
    }
    // TODO : handle login for hospital party

    toast("Triying lo log in , still not implemented" , {icon:''})
  };

  return (
    <LoginLayout canCreateAccout={false}>
      <div className='flex items-center justify-center min-h-full flex-col space-y-3'>
        <h1 className='text-3xl tracking-tighter'>
          Login by just connecting your wallet
        </h1>
        <ConnectButton />
        <button onClick={handleHospitalLogin} className='w-2/5'>Login</button>
      </div>
    </LoginLayout>
  );
}
