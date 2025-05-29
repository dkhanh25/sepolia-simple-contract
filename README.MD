
# Sepolia Simple Contract – Inbox

> A minimal smart contract project built for learning Ethereum, smart contracts, and deployment on the Sepolia testnet.

---

## Contract: `Inbox.sol`

A simple smart contract that:
- Stores a single `message` on the blockchain.
- Allows users to update the message using the `setMessage(string)` function.

---

## Testing

We use **Mocha** for unit testing in the local environment, simulating interactions with the contract.

### Local Blockchain Setup:
- **Ganache CLI**: Provides free, local Ethereum accounts and a test network.
- Easy to reset and replay scenarios without needing real ETH.

---

## Compilation

Contract is compiled using the **Solidity compiler (`solc`)**:
- Outputs include:
  - **ABI** – Application Binary Interface (for web3 interaction)
  - **Bytecode** – Ready-to-deploy compiled version

Source code is also exported for deployment use.

---

## Deployment

We use **@truffle/hdwallet-provider** for deployment, which handles account signing and network access.

### Provider Setup:
- **Mnemonic** phrase (from MetaMask or another wallet)
- **Infura/RPC URL** for Sepolia testnet access

### Track Deployment:
You can verify the deployed contract using:
- [Sepolia Etherscan](https://sepolia.etherscan.io)
- Check by:
  - Contract address
  - Transaction hash
  - Block ID

---

## Project Purpose

This project is for **Web3 learning** purposes only.

> ⚠️ No coding conventions were strictly followed (neither in Solidity nor JavaScript).  
> ⚠️ No real funds are stored on the associated Sepolia account — **please don’t hack me bro**.

---


## Notes

- Make sure to keep your **mnemonic secret** and never upload `.env` or secret files to GitHub.
- Contract addresses and deployment artifacts may change with each deployment — double check before sharing!

---