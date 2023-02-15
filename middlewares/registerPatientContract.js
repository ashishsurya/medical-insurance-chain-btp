import { ethers } from 'ethers';
import abi from './abi.json';

export async function registerPatientContract(hash, patientAddress) {
  console.log(hash)
  var contractAddress =
    process.env.NEXT_PUBLIC_PATIENT_REGISTRATION_SMART_CONTRACT_ADDRESS;
  const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');

  await provider.send('eth_requestAccounts', []);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, abi, signer);
  var data;
  try {
    
    data = await contract.registerPatient(hash, patientAddress);
  } catch (e) {
    return "Something went wrong";
  }

  return data;
}
