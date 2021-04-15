console.log('childParents&TraversingDOM');

let cont = document.querySelector('.no');
cont = document.querySelector('.container');
console.log(cont);
console.log(cont.childNodes); // childNode will show all elements like text, comment, h1, div, form etc. hence the nodeList count is 11
console.log(cont.children); // children is most frequetly use when working with websites 

let nodeName = cont.childNodes[1].nodeName;
console.log(nodeName);

let nodeType = cont.childNodes[1].nodeType;
console.log(nodeType);
// node types
// 1. element
// 2. attributes
// 3. text node
// 4. comment
// 5. document
// 6. docType
// console.log(cont.childNodes);
// console.log(cont.children);

let container = document.querySelector('div.container');
console.log(container.children[1].children[0].children);
console.log(container.firstChild);
//console.log(conatiner.firstElementChild);
console.log(container.lastChild);
console.log(container.lastElementChild);
console.log(container.children);
console.log(container.childElementCount);
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);

