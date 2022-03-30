import React from 'react';

import { Body } from './components/Body';
import { Header } from './components/Header';

declare global {
  interface Window {
    pali: Readonly<any>;
  }
}

const App = () => {
  const paliProvider = window.pali;
  /* const web3Provider = window.pali.getProvider('ethereum');

  const connectWallet = async () => {
    if (paliProvider) {
      console.log(await paliProvider.enable());

      return;
    }

    console.error('pali provider not found.');
  };

  const disconnectWallet = async () => {
    if (paliProvider) {
      await paliProvider.disable();

      return;
    }

    console.error('pali provider not found.');
  };

  const changeAccount = async () => {
    if (paliProvider) {
      await paliProvider.request('changeAccount');

      return;
    }

    console.error('pali provider not found.');
  };

  const getBalance = async () => {
    if (paliProvider) {
      const response = await paliProvider.request({
        method: 'sys_getBalance',
        asset: 'SYS',
      });

      console.log('get balance response', response);

      return response;
    }

    console.error('pali provider not found.');
  };

  const getAccount = async () => {
    if (paliProvider) {
      const response = await paliProvider.request({
        method: 'sys_getAccounts',
        asset: 'SYS',
      });

      console.log('get accounts response', response);

      return response;
    }

    console.error('pali provider not found.');
  };

  const getChainId = async () => {
    if (paliProvider) {
      const response = await paliProvider.request({
        method: 'sys_getChainId',
        asset: 'SYS',
      });

      console.log('get chain id response', response);

      return response;
    }

    console.error('pali provider not found.');
  };

  const getNetwork = async () => {
    if (paliProvider) {
      const response = await paliProvider.request({
        method: 'sys_getNetwork',
        asset: 'SYS',
      });

      console.log('get network response', response);

      return response;
    }

    console.error('pali provider not found.');
  };

  const getPublicKey = async () => {
    if (paliProvider) {
      const response = await paliProvider.request({
        method: 'sys_getPublicKey',
        asset: 'SYS',
      });

      console.log('get public key response', response);

      return response;
    }

    console.error('pali provider not found.');
  };

  const signMessage = async () => {
    if (paliProvider) {
      const response = await paliProvider.request({
        method: 'sys_signMessage',
        asset: 'SYS',
      });

      console.log('get accounts response', response);

      return response;
    }

    console.error('pali provider not found.');
  };

  const sendTransaction = async () => {
    if (paliProvider) {
      const response = await paliProvider.request({
        method: 'sys_signTransaction',
        asset: 'SYS',
      });

      console.log('get accounts response', response);

      return response;
    }

    console.error('pali provider not found.');
  };

  // eth

  const getBlockNumber = async () => {
    if (web3Provider) {
      const response = await web3Provider.request({
        method: 'eth_getBlockNumber',
        asset: 'ETH',
      });

      console.log('get BlockNumber response', response);

      return response;
    }

    console.error('pali provider not found.');
  };

  const estimateGas = async () => {
    if (web3Provider) {
      const response = await web3Provider.request({
        method: 'eth_estimateGas',
        asset: 'ETH',
      });

      console.log('get estimateGas response', response);

      return response;
    }

    console.error('pali provider not found.');
  }; */

  return (
    <div>
      <div className="bg-bkg-6 text-white md:px-8 xl:px-52 2xl:px-72 h-max">
        <Header />
        <Body />
      </div>
      <div className="bottom-0 flex-row items-center bg-bkg-4 h-16 w-full px-2 md:px-8 xl:px-52 2xl:px-72 flex justify-between">
        <div className=" flex items-center h-max flex-row gap-x-3">
          <button className="rounded-full bg-brand-deepPink100 p-2 text-white text-xs md:text-sm">
            TW
          </button>
          <button className="rounded-full bg-brand-deepPink100 p-2 text-white text-xs md:text-sm">
            TW
          </button>
          <button className="rounded-full bg-brand-deepPink100 p-2 text-white text-xs md:text-sm">
            TW
          </button>
        </div>
        <div className=" flex items-center h-max flex-row gap-x-3">
          <button className="rounded-full p-2 text-white text-xs md:text-sm">
            DOWNLOAD
          </button>
          <button className="rounded-full p-2 text-white text-xs md:text-sm">
            DOCS
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5">
        <button
          className="w-72 p-2 border border-pink-300 rounded-md"
          // onClick={connectWallet}
        >
          connect wallet
        </button>
        <button
          className="w-72 p-2 border border-pink-300 rounded-md"
          // onClick={changeAccount}
        >
          change account
        </button>
        <button
          className="w-72 p-2 border border-pink-300 rounded-md"
          // onClick={disconnectWallet}
        >
          disconnect wallet
        </button>
        <button
          className="w-72 p-2 border border-pink-300 rounded-md"
          // onClick={getBalance}
        >
          get balance
        </button>
        <button
          className="w-72 p-2 border border-pink-300 rounded-md"
          // onClick={getAccount}
        >
          get accounts
        </button>
        <button
          className="w-72 p-2 border border-pink-300 rounded-md"
          // onClick={getChainId}
        >
          get chain id
        </button>
        <button
          className="w-72 p-2 border border-pink-300 rounded-md"
          // onClick={getNetwork}
        >
          get network
        </button>
        <button
          className="w-72 p-2 border border-pink-300 rounded-md"
          // onClick={getPublicKey}
        >
          get public key
        </button>
        <button
          className="w-72 p-2 border border-pink-300 rounded-md"
          // onClick={signMessage}
        >
          sign message
        </button>
        <button
          className="w-72 p-2 border border-pink-300 rounded-md"
          // onClick={sendTransaction}
        >
          send tx
        </button>
        <button
          className="w-72 p-2 border border-pink-300 rounded-md"
          // onClick={getBlockNumber}
        >
          get block number
        </button>
        <button
          className="w-72 p-2 border border-pink-300 rounded-md"
          // onClick={estimateGas}
        >
          estimate gas
        </button>
      </div>
    </div>
  );
};

export default App;
