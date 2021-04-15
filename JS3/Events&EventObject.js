console.log('Event & event objects');
// there are multiple events availbale in javascript (click, mouseover etc)
document.getElementById('heading').addEventListener('click', function(e){
    console.log("you have clicked the heading");
    variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
    variable = Array.from(e.target.classList);
    variable = e.target.id;
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    //location.href = '//codewithharry.com';
    console.log(variable);
});