console.log('Creating an Editable Div');

// Create a element 
var divElement = document.createElement('div');

// add text to that created element
var val =localStorage.getItem('text');
var text;
if (val == null) {
    var text = document.createTextNode('This is my element,click to edit it');
} else {
    text = document.createTextNode(val);
}
divElement.appendChild(text);

// give element id, style & class
divElement.setAttribute('class', 'elem');
divElement.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px');
divElement.setAttribute('id', 'elem');

// grab the main container
var conatainer = document.querySelector('.container');
var first = document.getElementById('myFirst');

// Insert the element before element with id first
conatainer.insertBefore(divElement, first);

console.log(divElement, conatainer, first);

// add event listener to the divElement'
divElement.addEventListener('click', function(){
    var noTextAreas = document.getElementsByClassName('textarea').length;
    if (noTextAreas == 0) {
        var html = elem.innerHTML;
        divElement.innerHTML = `<textarea class="textarea form-control"  id="textarea" rows="3">${html}</textarea>`
    }
    // listen for the blur event on textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function() {
        elem.innerHTML = textarea.nodeValue;
        localStorage.setItem('text', textarea.value);
    })
});
