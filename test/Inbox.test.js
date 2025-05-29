const ganache = require('ganache');
const { Web3 } = require('web3');
const assert = require('assert');
const { describe } = require('mocha');
const web3 = new Web3(ganache.provider());
// updated ganache and web3 imports added for convenience
const {interface, bytecode} = require('../compile');
// contract test code will go here

let accounts;
let inbox;

beforeEach( async () => {
    accounts = await web3.eth.getAccounts();

    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['Hi there']})
    .send({from: accounts[0], gas: '1000000'})
})

describe('Inbox testing', () => {
    it('deploy an inbox', () => {
        assert.ok(inbox.options.address);
    } )

    it('test message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Hi there');
    })
})