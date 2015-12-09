/*

Hints for the first problem:

1. Define a function that:
- is assigned to a variable named `sum`
- has one parameter named `options`
- returns the calculated sum of all of the values of all of the options passed in

NOTE: you can use a `for` loop to make this happen.

*/

function getSum(prices){
  var sum = 0;
  for (var i = 0; i < prices.length; i++) {
    sum += parseFloat(prices[i].value);
  }
  return sum.toFixed(2);
}

function getAvg(prices) {
  var avg = getSum(prices) / prices.length;
  return avg.toFixed(2);
}

function getCount(prices) {
  var count = 0;
  for (var i = 0; i < prices.length; i++) {
    if(prices[i].selected){
      count++
    }
  }
  return count;
}


function getSelectedSum(prices){
  var total = 0;
  for (var i = 0; i < prices.length; i++) {
    if(prices[i].selected){
      total += parseInt(prices[i].value);
    }
  }
   return total.toFixed(2);
}
