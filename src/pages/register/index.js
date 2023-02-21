export default function RegisterPage() {}

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: '/register/patient',
    },
  };
}
