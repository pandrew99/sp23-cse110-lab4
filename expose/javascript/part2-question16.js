// question 16
let statistics = {
    redCars: 21,
    blueCars: 45, 
    greenCars: 12, 
    raceCars: 5, 
    blackCars: 40, 
    rareCars: 2
};

// for loop to loop through statistics if property 
// starts with 'r' or value is odd
for (let property in statistics) {
    if (property[0] == 'r'){
        console.log(statistics[property]);
    } else if ((statistics[property] % 2) == 1){
        console.log(statistics[property]);
    }
}