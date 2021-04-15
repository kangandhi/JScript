console.log("This is Creating, Removing, Replacing Elements");
var element = document.createElement('li');
var text = document.createTextNode('I am a text node');

// Add a class Name to the LI element.
element.className = 'childul';
element.id = 'createdLi'
element.setAttribute('title', 'myTitle');
element.innerText = "Hello This is javascript";
element.innerHTML = '<b>Hello This is javascript</b>'
//console.log(element);

var ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul);
// console.log(element);

var elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
var tnode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);


element.replaceWith(elem2);
var myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
var pr = elem2.hasAttribute('href');
elem2.removeAttribute('id');
elem2.setAttribute('title', myelem2title);
console.log(pr);


// quick quiz

// create a heading element with text as "Go to codeWithHarry" and create an a tag outside it with href = "http://www.codewithharry.com"



