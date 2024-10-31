const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with your contract address
const contractABI = [/* Your contract's ABI */];

const web3 = new Web3(window.ethereum);

async function connectWallet() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    console.log("Connected account:", account);

    // Enable the buttons
    document.getElementById("mintToken").disabled = false;
    document.getElementById("transferToken").disabled = false;
}

async function mintToken() {
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    const tx = await contract.methods.mintToken(100).send({ from: account });
    console.log("Token minted:", tx.transactionHash);
}

async function transferToken(toAddress, amount) {
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    const tx = await contract.methods.transfer(toAddress, amount).send({ from: account });
    console.log("Token transferred:", tx.transactionHash);
}

async function getTokenBalance() {
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    const balance = await contract.methods.balanceOf(account).call();
    document.getElementById("tokenBalance").textContent = `Your token balance: ${balance}`;
}

document.getElementById("connectWallet").addEventListener("click", connectWallet);
document.getElementById("mintToken").addEventListener("click", mintToken);
document.getElementById("transferToken").addEventListener("click", () => {
    const toAddress = prompt("Enter recipient address:");
    const amount = prompt("Enter amount to transfer:");
    transferToken(toAddress, amount);
});

// Initial token balance check
getTokenBalance();
