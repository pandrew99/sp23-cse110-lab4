// Question 5-8
function discountPrices(prices, discount) {
    let discounted = [];
    let finalPrice = 0;

    for (let i = 0; i < prices.length; i++) {
        let discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    // console.log(i); // question 5
    // console.log(discountedPrice); // question 6
    // console.log(finalPrice); // question 7

    return discounted; // question 8
}
console.log(discountPrices([100, 200, 300], 0.5));
// discountPrices([100, 200, 300], 0.5);