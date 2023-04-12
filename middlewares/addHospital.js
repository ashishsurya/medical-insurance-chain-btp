import { ethers } from 'ethers';
import CentralSCConfig from './abis/centralSCconfig.json';

export const addHospital = async () => {
  const contractAddress = CentralSCConfig.address;
  const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
  await provider.send('eth_requestAccounts', []);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    contractAddress,
    CentralSCConfig.abi,
    signer
  );

  var data;
  try {
    data = await contract.addHospital(
      '0x479dE3937197D38cFf4FF46Bdee6Df8b066346F9',
      '0x479dE3937197D38cFf4FF46Bdee6Df8b066346F9'
    );
  } catch (e) {
    console.error(e);
    return 'Something went wrong....';
  }

  return data;
};
