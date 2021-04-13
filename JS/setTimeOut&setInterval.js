// Arror Functions in java script
// Normal function
// function sum(a, b) {
//     c = a + b;
//     return c;
// }

sum = (a, b) => {
    c = a + b;
    return c;
}
c1 = sum(4, 5)
console.log(c1);


multiply = (x, y) => {
    z = x * y;
    return z;
}
c2 = multiply(5, 7)
console.log(c2);

// setTimeOut & setIntervals
logOn = () => { 
    document.querySelectorAll('.container')[1].innerHTML = '<b> set interval fired</b>'
    console.log('I am your log');
}

//clr = setTimeout(logOn, 2000);
//clr = setInterval(logOn, 5000);
//use = clearInterval(clr)/clearTimeout (clr) to cancel setIntervale/setTimeout

