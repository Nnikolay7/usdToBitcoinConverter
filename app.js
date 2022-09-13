const bitcoinPrice = Number(prompt('What is Bitcoin price today to USD?', ''));
const amountOfMoney = Number(prompt('How much $ do you have?', ''));
function usdToBitcoin() {
    let bitcoinAmount = amountOfMoney * 1 / bitcoinPrice;
    alert(`You can buy ${bitcoinAmount} BTC`);
}
usdToBitcoin();
