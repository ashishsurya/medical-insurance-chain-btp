import { useForm } from 'react-hook-form';
import PatientLoginForm from '../../components/PatientLoginForm';
import LoginLayout from '../../components/layouts/LoginLayout';
import { useAccount } from 'wagmi';
import { createHash } from 'crypto';
import { loginPatientContract } from '../../../middlewares/loginPatientContract';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';

export default function PatientLoginPage() {
  const { isConnected } = useAccount();
  const router = useRouter();

  const { register, handleSubmit } = useForm();
  async function loginUser(data) {
    if (!isConnected) {
      toast.error('Connect to a wallet before logging in.');
      return;
    }
    const { fullName, aadhaarNumber, dob } = data;
    const hash =
      '0x' +
      createHash('sha256')
        .update(`${fullName} ${aadhaarNumber} ${dob}`)
        .digest('hex');
    // TODO : contact the login smart contract.......
    const res = await loginPatientContract(hash);
    console.log(res);
    if (res === 'Something Went wrong....') {
      toast.error('Not able to contact web3');
      return;
    } else if (res === '0x0000000000000000000000000000000000000000') {
      toast('No account registered with following details', { icon: '👀' });
    } else {
      toast.success('Login successful');
      localStorage.setItem('currUser', JSON.stringify(data));
      localStorage.setItem('userType', 'patient');
      router.replace('/patient');
    }
  }
  return (
    <LoginLayout>
      <PatientLoginForm
        register={register}
        handleSubmit={handleSubmit}
        loginUser={loginUser}
      />
    </LoginLayout>
  );
}
