import { useForm } from 'react-hook-form';
import PatientLoginForm from '../../components/PatientLoginForm';
import LoginLayout from '../../components/layouts/LoginLayout';
import { useAccount } from 'wagmi';
import { createHash } from 'crypto';
import { loginPatientContract } from '../../../middlewares/loginPatientContract';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export default function PatientLoginPage() {
  const { isConnected } = useAccount();
  const router = useRouter();

  const { register, handleSubmit } = useForm();
  async function loginUser(data) {
    if (!isConnected) {
      toast('Connect Wallet', { type: 'error' });
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
      toast('Not able to contact web3', { type: 'error' });
      return;
    } else if (res === '0x0000000000000000000000000000000000000000') {
      toast('No account registered with following details', { type: 'info' });
    } else {
      localStorage.setItem('currUser', JSON.stringify(data));
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
