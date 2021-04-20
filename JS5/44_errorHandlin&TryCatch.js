console.log("Error Handling & Try Catch");

// pretend this is coming from a sever as response
var a = "Harry bhai";
a = undefined;
if (a !=undefined) {
    throw new Error('This is not undefined'); // custome error
} else {
    console.log('This is undefined');
}


try {
    //null.console
    //environment
    console.log("we are inside try block");
    functionHarry();

} catch (error) {
    console.log("are you want to throw error");
    //console.log(error.name);
    console.log(error.message);

} finally {
    console.log("despite of any error in above, Finally we will run this");
}

//Quick Quiz
// how many types of errors are there on internet.