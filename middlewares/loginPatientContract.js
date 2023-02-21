import { Contract, ethers } from 'ethers';
import RegisterPatientContract from './patientRegistrationContractConfig.json';

export const loginPatientContract = async (hash) => {
  console.log(hash)
  const contractAddress = RegisterPatientContract.address;
  const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
  await provider.send('eth_requestAccounts', []);
  const signer = provider.getSigner();
  const contract = new Contract(
    contractAddress,
    RegisterPatientContract.abi,
    signer
  );
  var data;
  try {
    data = await contract.getPatientAddress(hash);
  } catch (e) {
    console.error(e);
    return 'Something Went wrong....';
  }
  return data;
};
