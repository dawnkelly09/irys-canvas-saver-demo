# Irys + Coinbase Wallet

An example repo for everyone joining Base's Onchain Summer II.

With this repo you can:

- Connect using Coinbase Wallet (via RainbowKit / wagmi / viem)
- Upload images and pay using $ETH on BASE (the demo is configured to use Sepolia)
- Query Irys for recent transactions paid for with $ETH on BASE

## Installation

1. Rename `.env.local.example` to `.env.local` and add a [free WalletConnect Cloud projectId](https://cloud.walletconnect.com/sign-in)

2. `npm install`

3. `npm run dev`

## Base Mainnet vs Devnet

This project is configured to upload to the Irys Devnet and prompt the user to pay for transactions using $SEPOLIA on BASE. To switch to mainnet:

- Changes instances of `baseSeplia` to `base` in the project
- Set the value of `NEXT_PUBLIC_NETWORK` in `.env.local` to `mainnet`

## Components

- `Uploader`: Funds uploads, uploads single files, uploads groups of files
- `TransactionFeed`: Queries transactions

## Utility Functions

- `getIrys`: Connects to the Irys network.
- `fundAndUpload`: Determines the cost to upload a file, funds the Irys network, and permanently uploads the file.
- `getReceipt`: Uses the Irys Query package to retrieve a receipt by its ID.
- `titleCase`: Converts a string to title case.
