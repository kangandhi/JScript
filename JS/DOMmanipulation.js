let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);

//elemClass[0].style.background = 'yellow';

elemClass[1].style.background = 'green';
elemClass[0].classList.add('bg-primary');
elemClass[0].classList.add('text-success');
//elemClass[0].classList.remove('text-success');
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// Methods of finding documents 
// 

tn = document.getElementsByTagName('div')
console.log(tn);
createdElement1 = document.createElement('p');
createdElement1.innerText = 'This is a created para';
tn[0].appendChild(createdElement1);

createdElement2 = document.createElement('b');
createdElement2.innerText = 'This is a created bold';
tn[0].replaceChild(createdElement2, createdElement1);

// removeChild(elements); --------> removes an elements 

// Selecting using query selector 
console.log('---selecting using query---');
selector = document.querySelector('.container')
console.log(selector);

selector = document.querySelectorAll('.container')
console.log(selector);




