/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/

// find the "sum all" button √
// add event listener "click" √

// get all prices values √
// sum those values √
// append the sum to the DOM


var button = document.getElementById("sum-all");
var prices = document.getElementsByClassName('all-prices')[0].options;
var results = document.getElementById('results');


button.addEventListener("click", function () {
  results.innerHTML = "$" + getSum(prices);
})