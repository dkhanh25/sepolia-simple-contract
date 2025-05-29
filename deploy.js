const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
//updated web3 and hdwallet-provider imports added for convenience
const {interface, bytecode} = require('./compile');
const {PERSONAL_MNEUMONIC, PROVIDER_URL} = require('./config')
// deploy code will go here
const provider = new HDWalletProvider({
    mnemonic: PERSONAL_MNEUMONIC,
    providerOrUrl: PROVIDER_URL,
    numberOfAddresses: 1,
    shareNonce: true,
    derivationPath: "m/44'/60'/0'/0/"
});

const web3 = new Web3(provider);

const deploy = async () => {
    try {    
        const accounts = await web3.eth.getAccounts();
        console.log('Using account:', accounts[0]);
        
        // Check account balance
        const balance = await web3.eth.getBalance(accounts[0]);
        console.log('Account balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');
        
        // Get current gas price
        const gasPrice = await web3.eth.getGasPrice();
        console.log('Current gas price:', gasPrice);

        console.log('Deploying contract...');

        const inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['Hi there']})
        .send({from: accounts[0], gas: '1000000'})
        .on('transactionHash', (hash) => {
            console.log('Transaction hash:', hash);
        })
        .on('receipt', (receipt) => {
            console.log('Transaction receipt:', receipt);
        })
        .on('error', (error) => {
            console.log('Transaction error:', error);
        });

        console.log('Deployed at address: ', inbox.options.address);

        const message = await inbox.methods.message().call();
        console.log('Message: ', message);

    } catch (error) {
        console.log('Deployment failed:', error.message);
        console.log('Full error:', error);
    } finally {
        provider.engine.stop();
    }
};

deploy();