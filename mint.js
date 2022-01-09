"use strict";
// it invokes when loading screen
async function init() {
  if (window.ethereum) {
    const oldProvider = window.web3.currentProvider; // keep a reference to metamask provider
    window.myweb3 = new Web3(oldProvider);
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile && window.ethereum.isMetaMask == true) {
      const accounts_ = await window.ethereum.request({ method: 'eth_requestAccounts' });
      localStorage.setItem('myaccount', accounts_[0]);
    } else {
      const accounts_ = await ethereum.request({ method: 'eth_requestAccounts' });
	  /*
	  document.getElementById("menuMintBtn").innerText = accounts_[0].substring(0, 6) 
	   + "..." 
	   + accounts_[0].substring(accounts_[0].length -4, accounts_[0].length -1);
      */
	  localStorage.setItem('myaccount', accounts_[0]);
    }
  } else {
    const oldProvider = web3Infura.currentProvider; // keep a reference to metamask provider
    window.myweb3 = new Web3(oldProvider);
  }
  try {
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x1' }],
    });
  } catch (switchError) {
    if (switchError.code === 4902) {
      try {
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{ chainId: '0x1' }],
        });
      } catch (addError) {
        // handle "add" error
      }
    }
  }
}
// it invokes when "connect metamask" button click
async function onConnect() {
  if (window.ethereum) {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile && window.ethereum.isMetaMask == true) {
      const accounts_ = await window.ethereum.request({ method: 'eth_requestAccounts' });
      localStorage.setItem('myaccount', accounts_[0]);
    } else {
      const accounts_ = await ethereum.request({ method: 'eth_requestAccounts' });
      localStorage.setItem('myaccount', accounts_[0]);
    }
  }
}

async function sendEthFixed() {
  try {
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x1' }],
    });
  } catch (switchError) {
    if (switchError.code === 4902) {
      try {
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{ chainId: '0x1' }],
        });
      } catch (addError) {
        // handle "add" error
      }
    }
  }
  const Ether = document.getElementById("EthValue").value;
  const quantity = document.getElementById("amountOne").value;
  console.log("Ether", Ether);
  if(window.ethereum){
    const oldProvider = web3.currentProvider;
    window.myWeb3 = new Web3(oldProvider);
    window.myWeb3.eth.sendTransaction({
      "from": localStorage.getItem('myaccount'),
      "to": '0xdaaD12AA1486233b877858488c7cd9F15523B16b',
      // "gas": "21000", // 30400
      "value" : window.myweb3.utils.toWei((Ether*quantity).toString(), 'ether'),
      }, function(error, hash){
          console.log("Never");
    });
  }
}

window.addEventListener('load', async () => {
  init();
  /*
  document.querySelector("#mainMintBtn").addEventListener("click", onConnect);
  document.querySelector("#menuMintBtn").addEventListener("click", onConnect);
  */
  document.getElementsByName("mainMintBtn")[0].addEventListener("click", sendEthFixed);
});