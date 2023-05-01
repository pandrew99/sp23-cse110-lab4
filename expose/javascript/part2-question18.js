// question 18
function printTimeInSeconds() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

// prints every second (1000 ms)
setInterval(printTimeInSeconds, 1000);