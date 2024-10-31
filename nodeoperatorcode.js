const Web3 = require('web3');

//edit the line below with your infura.io api key
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const contractABI = [/* Your contract's ABI */];

const contract = new web3.eth.Contract(contractABI, contractAddress);

async function mintTokens() {
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];

  const tx = await contract.methods.mintToken(100).send({ from: account });
  console.log('Tokens minted:', tx.transactionHash);
}

mintTokens();
