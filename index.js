import { Minter, SendTxParams } from "minter-js-sdk";

const minterSDK = new Minter();
const txParams = new SendTxParams({
  privateKey:
    "5fa3a8b186f6cc2d748ee2d8c0eb7a905a7b73de0f2c34c5e7857c3b46f187da",
  nonce: 20,
  address: "Mx7633980c000139dd3bd24a3f54e06474fa941e16",
  amount: 10,
  coinSymbol: "MNT",
  feeCoinSymbol: "MNT",
  gasPrice: 1,
  message: "custom message"
});

minterSDK
  .postTx(txParams)
  .then(txHash => {
    console.log(`Tx created: ${txHash}`);
  })
  .catch(error => {
    const errorMessage = error.response.data.error.log;
    console.log(errorMessage);
  });
