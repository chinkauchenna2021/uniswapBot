require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
    compilers: [
      {
        version: "0.8.18",
        settings: {
          viaIR: false,
          optimizer: {
            enabled: false,
          },
        },
        },
        {
        version:"0.7.6"
      },
    ],
  },
  networks: {
    hardhat: {
      blockGasLimit: 30_000_000,
      throwOnCallFailures: false,
    },
  },
};
