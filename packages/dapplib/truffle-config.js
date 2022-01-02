require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net purpose gesture slight forget twice'; 
let testAccounts = [
"0xd3b4861a6c67d0b58706c1bf2dd2eb08c16f1516f57d89307fd064096b691f73",
"0xaff14fec6aa53d3503ddd7328a680969001e4a86e805beea4c95385f3d37a54a",
"0x5b0ff3952eabb92f24c90838bd193478c0ccbbd52b989314aec5988b54b71c3a",
"0xb8890109b3c75f95eee6c0060a2b4b8612d0d8cb406bdaa60726236b95813aae",
"0x3b23b5c47aba51a0151c20972568b0567427a5f39832bdb0489a2e4877e5e71d",
"0xbb76e8e04155193f1f48166e951395d3c9bd8df34085b10690cd8ca3410e9128",
"0xc2bdbd3b5522857d4363c8748dfee059023b312784087edd79ccf493bc8400de",
"0x0e6a408de0921e796a35fb05f93f0a83834838245a8772bb6fe1f20e57e1fbe1",
"0x675fad546898adfc898b9d1f9e0c778b9f5b594d3867dae44845ed25eb665bc4",
"0x0056732203a0e78e675a1a2dcf6cf8ac1c0be0b1c643530a75def5171a4c81e2"
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
            version: '^0.8.0'
        }
    }
};

