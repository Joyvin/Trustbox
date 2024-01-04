// @ts-nocheck
"use client";
import React, { useState } from "react";
import { ethers } from "ethers";

export default function ConnectWallet() {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const connect = async () => {
    if (!connected) {
      // Connect the wallet using ethers.js
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const _walletAddress = await signer.getAddress();
      setConnected(true);
      setWalletAddress(_walletAddress);
    } else {
      // Disconnect the wallet
      window.ethereum.selectedAddress = null;
      setConnected(false);
      setWalletAddress("");
    }
  };

  return (
    <button onClick={connect} className="btn-primary bg-black p-5">
      Connect Wallet
    </button>
  );
}
