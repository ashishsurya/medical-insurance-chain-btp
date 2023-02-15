import '../globals.css';
import { Web3Modal } from '@web3modal/react';
import {
  EthereumClient,
  modalConnectors,
  providers,
  walletConnectProvider,
} from '@web3modal/ethereum';
import { WagmiConfig, configureChains, createClient, mainnet } from 'wagmi';
import {
  arbitrum,
  avalanche,
  bsc,
  fantom,
  gnosis,
  goerli,
  optimism,
  polygon,
} from '@wagmi/chains';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// 1. get project id
const projectId = process.env.NEXT_PUBLIC_WEB3_MODAL_ID;

// 2. configure wagmi client
const chains = [
  mainnet,
  polygon,
  avalanche,
  arbitrum,
  bsc,
  optimism,
  gnosis,
  fantom,
  goerli,
];
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    version: '1',
    appName: 'web3Modal',
    chains,
    projectId,
  }),
  provider,
});

// 3. configure modal ethereum client
const ethereumClient = new EthereumClient(wagmiClient, chains);

// 4. Wrap the app with WagmiProvider and add <Web3Modal /> component.

function MyApp({ Component, pageProps }) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <Component {...pageProps} />
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </WagmiConfig>
      <ToastContainer />
    </>
  );
}

export default MyApp;
