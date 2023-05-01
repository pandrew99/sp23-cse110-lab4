// Question 1-4
function discountPrices(prices, discount) {
    var discounted = [];
    var finalPrice = 0;

    for (var i = 0; i < prices.length; i++) {
        var discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    // console.log(i); // question 1
    // console.log(discountedPrice); // question 2
    // console.log(finalPrice); // question 3

    return discounted; // question 4
}
console.log(discountPrices([100, 200, 300], 0.5));
// discountPrices([100, 200, 300], 0.5);