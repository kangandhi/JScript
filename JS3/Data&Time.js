console.log('Date & time in java script to get the log of user');

var today = new Date();
console.log(today);
console.log(typeof today);

var otherDate = new Date('8-4-2003 04:54:08');
otherDate = new Date('June 13 1975');
console.log(otherDate);

let date;
date = otherDate.getMonth();
date = otherDate.getDay();
date = otherDate.getDate();
date = otherDate.getHours();
date = otherDate.getMinutes();
date = otherDate.getSeconds();
date = otherDate.getTime();
console.log(date);

otherDate.setDate(23);
otherDate.setMonth(3);
otherDate.setFullYear(1990);
console.log(otherDate);


