var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = process.env.ROPSTEN_MNEMONIC;
var accessToken = process.env.INFRA_ACCESS_TOKEN;

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      network_id: '*'
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          mnemonic,
          'https://ropsten.infura.io/' + accessToken
        );
      },
      network_id: '3',
      gas: 2000000
    }
  }
};
