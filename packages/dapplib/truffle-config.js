require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hero flame shadow shock note situate unable gesture help success symptom'; 
let testAccounts = [
"0xeff55e0009b374c6866eedb0fc2eaaab7191e1c5c0ea34676f57624af58f3907",
"0xcdbfc725f9cd3f808ec880618a4dae5075a80f85df9af478db60ddae2d777337",
"0x243c5d82243caaa50e5818886e31045a755f7401be053b8de7f0d875fd609397",
"0xe200bc4562f1cae4aba029eb08329c34fb00256a8926133d895318fee34b2c1e",
"0x8e49e1452ba79a484fc4af8efe18b3d672f868d5e948ad0b0ab4c6f44fc81ab2",
"0xbe23411cb17cc6acf3898ded974fc69aabec3b5f2d66d0576abf6138b0c2e6fe",
"0x1a0cf970426bb7e8ecc5765191ac30ab2052ccc1a1e2b0933829a3b976f55009",
"0x16cf2eebb0654a56b22279f6cc4aef4b62635df428cdfce63a453524df7a43cd",
"0x64d31aca1ce5d250d00060d98daf9d5ddef6cf17ce995945be4a44604ed1c1cf",
"0xa76ce121888fd0db9f77faa06e1bff6958773bcac83fba0188746a41393df210"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
