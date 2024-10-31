# easyAVS - ERC 20 Token Launch Eigenlayer AVS Smart Contract + Node Operator Code+ Html UI Code

Save Time In Building ERC20 TOKEN LAUNCH 

Developed By **Abhishek Jha **

Excited To See What You Build With It

# Deployment guide - Deploying Your Smart Contract to the Holesky Testnet

npm install -g hardhat

npx hardhat create my-project

cd my-project
npm install --save-dev @nomiclabs/hardhat-ethers @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-etherscan

## Create a .env file in your project's root directory and add your Alchemy or Infura project ID and your private key:
ALCHEMY_API_KEY=YOUR_ALCHEMY_API_KEY
PRIVATE_KEY=YOUR_PRIVATE_KEY

## Update your hardhat.config.js file:

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// ... other configurations

const config = {
  solidity: "0.8.17", // Adjust to your Solidity version
  networks: {
    holesky: {
      url: "https://rpc.holesky.ethpandaops.io",
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};

export default config;

npx hardhat run scripts/deploy.js --network holesky

## Create a scripts/deploy.js file:

const { ethers } = require("hardhat");

async function main() {
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Holesky!");
  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
