console.log('Elements selectors');
/*
element selectors
1. single elements selectors
2. multi elements selectors 
*/

//1. single elements selectors
let element = document.getElementById('myFirst');
// element = element.className;
//element = element.childNodes;
//element = element.parentNode;
// element.style.color = 'red';
// element.innerText = 'harry is a good boy';
// element.innerHTML = '<b>harry is a good boy</b>';

console.log(element.innerText);

let sel = document.querySelector('#myFirst');  // # (pound is used to fetch the ID)
sel = document.querySelector('.child');  // .(DOT) is used to fetch the class
sel = document.querySelector('b'); // get the element by denoting the tag name.
sel = document.querySelector('div'); //  get the first div available in document.
sel.style.color = 'green';
console.log(sel);
sel = document.querySelector('#heading').style.color = 'brown';



// Multi element seletor
console.log("-----Multi element seletor-----");
let elem = document.getElementsByClassName('container');
elem = document.getElementsByClassName('div');

// how to iterate ? eachfor loop
Array.from(elem).forEach(function(element){
    console.log(element);
    element.style.color = "blue"
});


// traditional for loop 
for (let index = 0; index < elem.length; index++) {
    const element = elem[index];
    console.log(element);
    element.style.color = "blue"


    
}

// 

console.log(elem);
//console.log(elem[0].getElementsByClassName('child'));

