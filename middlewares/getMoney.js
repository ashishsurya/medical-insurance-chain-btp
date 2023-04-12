import { Contract, ethers } from 'ethers';
import RegisterPatientContract from './abis/patientRegistrationContractConfig.json';

export const getMoney = async (amount) => {
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
    data = await contract.getMoney(amount, { value: amount });
  } catch (e) {
    console.error(e);
    return 'Something Went wrong....';
  }
  return data;
};
