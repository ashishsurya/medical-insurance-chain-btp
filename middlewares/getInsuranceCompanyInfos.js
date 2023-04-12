import { ethers } from 'ethers';
import centralSCconfig from './abis/centralSCconfig.json';

export const getInsuranceCompanyInfos = async () => {
  console.log("GET INSURSNCE COMPANIES CALLED")
  const contractAddress = centralSCconfig.address;
  const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
  await provider.send('eth_requestAccounts', []);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    contractAddress,
    centralSCconfig.abi,
    signer
  );

  console.log(contract.address)

  var data;
  try {
    data = await contract.getInsuranceCompaniesInfos();
  } catch (e) {
    console.error(e);
    return 'Something went wrong....';
  }

  return data;
};
