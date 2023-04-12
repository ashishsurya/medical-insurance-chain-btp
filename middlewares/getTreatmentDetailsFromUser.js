import { ethers } from 'ethers';
import CentralSCConfig from './abis/centralSCconfig.json';

export const getTreatmentDetailsFromUser = async (hash) => {
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
    data = await contract.getTreatmentDetailsFromUser(hash);
  } catch (e) {
    console.error(e);
    return 'Something went wrong....';
  }

  return data;
};
