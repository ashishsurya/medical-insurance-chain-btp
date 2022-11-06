import '../globals.css';
import { Web3Modal } from '@web3modal/react';
import { providers, chains } from '@web3modal/ethereum';

const config = {
  projectId: process.env.NEXT_PUBLIC_WEB3_MODAL_ID,
  theme: 'dark',
  accentColor: 'teal',
  ethereum: {
    appName: 'medical-insurance-chain',
    chains: [chains.goerli, chains.polygonMumbai,],
    providers: [
      providers.walletConnectProvider({
        projectId: process.env.NEXT_PUBLIC_WEB3_MODAL_ID,
      }),
    ],
    autoConnect: true,
  },
};
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Web3Modal config={config} />
    </>
  );
}

export default MyApp;
