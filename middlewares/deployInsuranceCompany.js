import { ethers } from 'ethers';
import CentralSCConfig from './abis/centralSCconfig.json';

export const deployInsuranceCompany = async (info, address) => {
  console.log(info, address);
  const contractAddress = CentralSCConfig.address;
  const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
  await provider.send('eth_requestAccounts', []);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    contractAddress,
    CentralSCConfig.abi,
    signer
  );

  const lockprice = 1000000000000;

  var data;
  try {
    data = await contract.deployInsuranceCompany(info, address, {
      value: ethers.BigNumber.from(lockprice),
      gasLimit: 100000,
    });
  } catch (e) {
    console.error(e);
    return 'Something went wrong....';
  }

  return data;
};
