// import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import { useContract, useSigner, useAccount } from 'wagmi';
import ethers, {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
  BigNumberish
} from "ethers";

import path from 'path';
// import { OnChainNFTInterface } from '../../typechain/OnChainNFT'
import { createDataHook } from 'next-data-hooks';
// import { data as localhostData } from '../../deployments/localhost';

// const useOnChainNFT = () => {
//   // const [{ data, error, loading }, getSigner] = useSigner()

//   const [{ data: account }] = useAccount();
//   const [signer, setSigner] = useState<Signer>();

//  // get signer
//  useEffect(() => {
//   (async () => {
//     try {
//       const res = await account?.connector?.getSigner();
//       setSigner(res);
//     } catch (e) {
//       setSigner(undefined);
//     }
//   })();
// }, [account?.connector]);

// useEffect(() => {
//     console.log(account)
// }, [account])
  


//     const contract = useContract({
//       addressOrName: localhostData.contracts.onChainNFT.address,
//       contractInterface: localhostData.contracts.onChainNFT.abi,
//       signerOrProvider: signer
//     });

//     // useEffect(() => {
//     //   console.log(contract.signer);
//     // }, [contract]);
  

//   async function tokensByOwner({ _owner } : { _owner: string }) {
//     try {
//       // const options = {value: utils.parseEther("0.005")}
//       const results = await contract.tokensByOwner(_owner)
//       return results;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async function mint({ _userText } : { _userText: string }) {
//     try {
//         console.log(contract)
//       const options = {value: utils.parseEther("0.005")}
//       const results = await contract.mint(_userText, options)
//       return results;
//     } catch (error) {
//       console.log(error);
//     }
//   }


//   return { mint, tokensByOwner };
// };

// export {
//     useOnChainNFT,
// };