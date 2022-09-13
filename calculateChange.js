const calculateChange = function(total, cash) {
  change = cash - total;
  let moneyBack = {};
  
  while( change > 0) {
    if (change > 2000) {
      let $20 = Math.floor(change/2000);
      change = change - $20 * 2000
      moneyBack.TwentyDollar = $20
    }
    if (change > 1000) {
      let $10 = Math.floor(change/1000);
      change = change - $10 * 1000
      moneyBack.TenDollar = $10
    }
    if (change > 500) {
      let $5 = Math.floor(change/500);
      change = change - $5 * 500
      moneyBack.FiveDollar = $5
    }
    if (change > 200) {
      let $2 = Math.floor(change/200);
      change = change - $2 * 200
      moneyBack.TwoDollar = $2
    }
    if (change > 100) {
      let $1 = Math.floor(change/100);
      change = change - $1 * 100
      moneyBack.OneDollar = $1
    }
    if (change > 25) {
      let Quarter = Math.floor(change/25);
      change = change - Quarter * 25 
      moneyBack.Quarter =Quarter
    }
    if (change > 10) {
      let Dime = Math.floor(change/10);
      change = change - Dime * 10 
      moneyBack.Dime = Dime
    }
    if (change > 5) {
      let Nickel = Math.floor(change/5);
      change = change - Nickel * 5 
      moneyBack.Nickel = Nickel
    }
    if (change > 1) {
      let Penny = Math.floor(change/1);
      change = change - Penny * 1 
      moneyBack.Penny = Penny
    }
  }
  return moneyBack;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));