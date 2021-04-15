console.log('More on javascript events');

// // Target event = btn
// var btn = document.getElementById('btn');

// // single cleck functions
// btn.addEventListener('click', func1); 
// function func1(e) {
//         console.log("Thanks, its a single click", e);
//         e.preventDefault(); // this will prevent the submition
// }

// //double click functions
// btn.addEventListener('dblclick', func2);
// function func2(e) {
//     console.log("Thanks, its a double click", e);
//     e.preventDefault();
// }

// // mouse-down event
// btn.addEventListener('mousedown', func3);
// function func3(e) {
//     console.log("Thanks, its a mouse down event", e);
//     e.preventDefault();
// }

// mouse -enter events
// document.querySelector('.no').addEventListener
// ('mouseenter', function() {
//     console.log('you enetered no');
// })

// // mouse -exit events
// document.querySelector('.no').addEventListener
// ('mouseleave', function() {
//     console.log('you exit no');
// })

//mouse-move events , trageted class = .no or .container
document.querySelector('.container').addEventListener('mousemove', function(e) {
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX}, ${e.offsetY}, 160)`;  // range of the color is 0-255
    console.log('you triggered mouse move events');
})