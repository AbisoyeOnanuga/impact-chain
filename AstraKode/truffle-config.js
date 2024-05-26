
/**
    * Use this file to configure your truffle project. It's seeded with some
    * common settings for different networks and features like migrations,
    * compilation and testing. Uncomment the ones you need or modify
    * them to suit your project as necessary.
    *
    * More information about configuration can be found at:
    *
    * trufflesuite.com/docs/advanced/configuration
    *
    * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
    * to sign your transactions before they're sent to a remote public node. Infura accounts
    * are available for free at: infura.io/register.
    *
    * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
    * public/private key pairs. If you're publishing your code to GitHub make sure you load this
    * phrase from a file you've .gitignored so it doesn't accidentally become public.
    *
*/

const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat"; //insert your mnemonic here
    
module.exports = {
    /**
        * Networks define how you connect to your ethereum client and let you set the
        * defaults web3 uses to send transactions. If you don't specify one truffle
        * will spin up a development blockchain for you on port 9545 when you
        * run `develop` or `test`. You can ask a truffle command to use a specific
        * network from the command line, e.g
        *
        * $ truffle test --network <network-name>
    */

    networks: {
        development: {
            host: "127.0.0.1",
            port: "9545",
            network_id: "*", // match any network id
        },
        mumbai: {
            provider: new HDWalletProvider(
                mnemonic,
                "https://polygon-mumbai.infura.io/v3/"
            ),
            network_id: 80001,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
            gasLimit: 40000000,
            networkCheckTimeout: 10000,
        },
        matic: {
            provider: new HDWalletProvider(
                mnemonic,
                "https://polygon-mainnet.infura.io/v3/"
            ),
            network_id: 137,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
            gasLimit: 40000000,
            networkCheckTimeout: 10000,
        },
        ropsten: {
            provider: new HDWalletProvider(
              mnemonic,
              "https://ropsten.infura.io/v3/"
            ),
            network_id: 3,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
            gasLimit: 40000000,
            networkCheckTimeout: 10000,
        },
        rinkeby: {
            provider: new HDWalletProvider(
              mnemonic,
              "https://rinkeby.infura.io/v3/"
            ),
            network_id: 4,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
            gasLimit: 40000000,
            networkCheckTimeout: 10000,
        },
        mainnet: {
            provider: new HDWalletProvider(
              mnemonic,
              "https://mainnet.infura.io/v3/"
            ),
            network_id: 1,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
            gasLimit: 40000000,
            networkCheckTimeout: 10000,
        },
        goerli: {
            provider: new HDWalletProvider(
              mnemonic,
              "https://goerli.infura.io/v3/"
            ),
            network_id: 5,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
            gasLimit: 40000000,
            networkCheckTimeout: 10000,
        },
        bsc: {
            provider: new HDWalletProvider(
              mnemonic,
              "https://bsc-dataseed.binance.org/"
            ),
            network_id: 56,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
            gasLimit: 40000000,
            networkCheckTimeout: 10000,
        },
        avalanche: {
            provider: new HDWalletProvider(
              mnemonic,
              "https://api.avax.network/ext/bc/C/rpc"
            ),
            network_id: 43114,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
            gasLimit: 40000000,
            networkCheckTimeout: 10000,
        },
        xdai: {
            provider: new HDWalletProvider(
              mnemonic,
              "https://rpc.xdaichain.com/"
            ),
            network_id: 100,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
            gasLimit: 40000000,
            networkCheckTimeout: 10000,
        },
        heco: {
            provider: new HDWalletProvider(
              mnemonic,
              "https://http-mainnet.hecochain.com"
            ),
            network_id: 128,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
            gasLimit: 40000000,
            networkCheckTimeout: 10000,
        },
        fantom: {
            provider: new HDWalletProvider(
              mnemonic,
              "https://rpcapi.fantom.network"
            ),
            network_id: 250,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
            gasLimit: 40000000,
            networkCheckTimeout: 10000,
        },
    },
    
    // Set default mocha options here, use special reporters etc.
    mocha: {
        // timeout: 100000
    },
    
    // Configure your compilers
    compilers: {
        solc: {
            version: "0.8.17", // Fetch exact version from solc-bin (default: truffle's version) // Fetch exact version from solc-bin (default: truffle's version)
            // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
            settings: {
                // See the solidity docs for advice about optimization and evmVersion
                optimizer: {
                    enabled: true,
                    runs: 500,
                },
                //viaIR: true,
            },
            //  evmVersion: "byzantium"
            // }
        },
    },
    
    // Truffle DB is currently disabled by default; to enable it, change enabled:
    // false to enabled: true. The default storage location can also be
    // overridden by specifying the adapter settings, as shown in the commented code below.
    //
    // NOTE: It is not possible to migrate your contracts to truffle DB and you should
    // make a backup of your artifacts to a safe location before enabling this feature.
    //
    // After you backed up your artifacts you can utilize db by running migrate as follows:
    // $ truffle migrate --reset --compile-all
    //
    // db: {
    // enabled: false,
    // host: "127.0.0.1",
    // adapter: {
    //   name: "sqlite",
    //   settings: {
    //     directory: ".db"
    //   }
    // }
    // }
};