let prices = [67,231,8,0,7,1,5,3,6,4,30];
let prices2 = [7,6,4,3,1];

let maxProfit = function (prices) {
  let res = 0;
for (let i = 0; i < prices.length; i++) {
  if (prices[i] > prices[i-1]) {
    res += prices[i] - prices[i - 1]
  }
}

  return res;
};

console.log(maxProfit(prices));
console.log(maxProfit(prices2));
