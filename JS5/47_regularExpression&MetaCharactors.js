console.log("Regular expressions & Meta Charactors in java script");

var regex = /harrsdfgy/;
// Lets look into some metacharacter symbols
regex = /^harrdc/; // ^ means expression will match if string starts with
regex = /harry$/; // $ at the end of the string means "string ends with"
regex = /h.rry/; //matches any one character
regex = /h*rry/; //matches any 0 or more characters
regex = /ha?rryi?t/; //? after character means that character is optional
regex = /h\*rry/

var str = "h*rry means codewith"; // 

var result = regex.exec(str);
console.log("The result from exec is ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
