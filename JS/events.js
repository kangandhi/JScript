function clicked() {
    console.log('The button was clicked');
}

// window.onload = function() {
//     console.log('The document was loaded');
// }

// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = '<b> we have clicked</b>'
//     console.log('Clicked on container');
// })

// firstContainer.addEventListener('mouseover', function() {
//     console.log('mouse on container');
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log('mouse out of container');
// })

// firstContainer.addEventListener('mouseup', function(){
//     console.log('mouse up when clicked on the container');
// })

// firstContainer.addEventListener('mousedown', function() {
//     console.log('mouse down when clicked on the container');
// })

let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
     console.log('mouse up when clicked on the container');
})
