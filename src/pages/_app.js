import '../globals.css';
import '@rainbow-me/rainbowkit/styles.css';

import { WagmiConfig, configureChains, createClient, mainnet } from 'wagmi';
import { goerli } from '@wagmi/chains';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { publicProvider } from 'wagmi/providers/public';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';

// 1. get project id
const projectId = process.env.NEXT_PUBLIC_WEB3_MODAL_ID;

// 2. configure wagmi client
const { chains, provider } = configureChains([goerli], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: 'Rainbow Kit App',
  chains: chains,
});

const wagmiClient = createClient({
  provider,
  connectors,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
      <ToastContainer />
    </>
  );
}

export default MyApp;
