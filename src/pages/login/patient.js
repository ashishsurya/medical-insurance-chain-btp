import { useForm } from 'react-hook-form';
import PatientLoginForm from '../../components/PatientLoginForm';
import LoginLayout from '../../components/layouts/LoginLayout';

export default function PatientLoginPage() {

  const { register , handleSubmit} = useForm();
  async function loginUser(data) {

  }
  return (
    <LoginLayout>
      <PatientLoginForm register={register} handleSubmit={handleSubmit} loginUser={loginUser}/>
    </LoginLayout>
  );
}
