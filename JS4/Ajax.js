console.log("Ajax");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    // Instantiate an XHR object
    const xhr = new XMLHttpRequest();

    // open the object
    xhr.open('GET', 'harry.txt', true);

    // what to do on progress
    xhr.onprogress = function() {
        console.log('On progress');
    }
    //  what to do when response is ready 
    xhr.onload = function() {
        console.log(this.responseText);
    }
    // send the request
    xhr.send();
}