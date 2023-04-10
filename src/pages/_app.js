import '../globals.css';
import '@rainbow-me/rainbowkit/styles.css';

import { WagmiConfig, configureChains, createClient, mainnet } from 'wagmi';
import { goerli } from '@wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { Toaster } from 'react-hot-toast';
import { Inter } from 'next/font/google';
import { RecoilRoot } from 'recoil';

const inter = Inter({ subsets: ['latin'] });

// 1. get project id

// 2. configure wagmi client
const { chains, provider } = configureChains([goerli], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: 'Rainbow Kit App',
  chains: chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  provider,
  connectors,
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <RecoilRoot>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <Toaster position='top-center' />
            <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
      </RecoilRoot>
    </div>
  );
}

export default MyApp;
