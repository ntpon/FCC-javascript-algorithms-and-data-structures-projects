function checkCashRegister(price, cash, cid) {
  const currencyUnit = {
    'ONE HUNDRED': 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  };

  const totalMoney = cid.reduce((acc, coin) => {
    return +(acc + coin[1]).toFixed(2);
  }, 0);
  //totalMoney = Number(totalMoney.toFixed(2));
  let totalChange = +(cash - price).toFixed(2);

  // Calculate Price

  if (totalMoney === totalChange) {
    return { status: 'CLOSED', change: cid };
  }

  if (totalMoney < totalChange) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  const results = [];
  cid.reverse().forEach((coin) => {
    const [currencyName, currencyAmount] = coin;
    if (currencyAmount === 0 || currencyUnit[currencyName] > totalChange) {
      return;
    }
    let num = Math.floor(totalChange / currencyUnit[currencyName]);
    const total = num * currencyUnit[currencyName];
    if (currencyAmount <= total) {
      totalChange = +(totalChange - currencyAmount).toFixed(2);
      results.push([currencyName, currencyAmount]);
    } else {
      totalChange = +(totalChange - total).toFixed(2);
      results.push([currencyName, total]);
    }
  });
  //console.log(totalChange);
  if (totalChange !== 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }
  return { status: 'OPEN', change: results };
}

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.5],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
  ])
);
