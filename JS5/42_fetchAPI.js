console.log("Fetch API");

//button with id myBtn
var myBtn = document.getElementById("myBtn");

// div with id content 
var content = document.getElementById("content");

// function getData() {
//     url = "kanchan.txt";
//     fetch(url).then((response)=>{
//         console.log("Inside first then");
//         return response.text();
//     }).then((data) => {
//         console.log("Inside first then");
//         console.log(data);
//     })
// }

//fetch data from api github.com/users (in URL)
function getData() {
    url = "https://api.github.com/users";
    fetch(url).then((response)=>{
        console.log("Inside first then");
        return response.json();
    }).then((data) => {
        console.log("Inside first then");
        console.log(data);
    })
}
// console.log("before running get data");
// getData();
// console.log("After running get data");

// URL has been fetch from dummy rest api examples 
function postData() {
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"harry","salary":"123","age":"23"}' // name should be unique every time you reload the page
    params = {
        method:'post',
        header:{
            'content-type' : 'application/json'
        }, 
        body: data // if your data is a object type then  JSON.stringify need to be used.
    }
    //regular function
    // fetch(url, params).then((response)=>{
    //     return response.json();
    // }).then((data)=>{
    //     console.log(data);
    // })

    // one liners arrows function shortcut
    fetch(url, params).then(response => response.json())
    .then(data=> console.log(data)
    )
}
postData()