import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/' + process.env.ALCHEMY_API_KEY,
      chainId: 80001,
      accounts: [process.env.TEST_ACCOUNT || '']
    },
    testBSC: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      chainId: 97,
      accounts: [process.env.TEST_ACCOUNT || '']
    },
    bsc: {
      url: 'https://bsc.meowrpc.com',
      chainId: 56,
      gasPrice: 8000000000,
      accounts: [process.env.MAIN_ACCOUNT || '']
    },
    polygon: {
      url: 'https://polygon-mainnet.g.alchemy.com/v2/' + process.env.ALCHEMY_API_KEY,
      chainId: 137,
      gasPrice: 120000000000,
      accounts: [process.env.MAIN_ACCOUNT || '']
    }
  }
};

export default config;
