console.log('Local Session Storage');

// local storage 
// add the key value inside the storage 
localStorage.setItem('name1', 'kanchan');
localStorage.setItem('name2', 'javascript');


// How to check local storage? - go to console -> select application -> get the local storage 
// to clear the entire local stroage 
localStorage.clear();

// retrieve an item from local storage 
var name = localStorage.getItem('name1');
name = localStorage.getItem(name)
console.log(name);


// JSON stringfy & parse
var impArray = ['adrak', 'pyaz', 'bhindi'];
localStorage.setItem('sabzi', JSON.stringify(impArray));
var retrieve = JSON.parse(localStorage.getItem('sabzi'));
console.log(retrieve);



// session storage = once the session close , all the data would be delete
// var imArray = ['aloo', 'palak', 'bhindi'];
// sessionStorage.setItem('sessionName1', 'skanchan');
// sessionStorage.setItem('sessionName1', 'sjavascript');
// sessionStorage.setItem('sessionSabzi', JSON.stringify(imArray));

