export default function LoginPage() {
  return null
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/login/patient',
    },
  };
}
