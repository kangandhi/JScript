console.log('Object prototype in javascript');

//object literals : object.prototype (when created an object , object was prototype was alraedy there. )
var obj = {
    name: 'kanchan',
    channel: 'code with harry',
    address: 'mars'
}
console.log(obj);
console.log(typeof obj);

//
function Obj(giveName, givenAddress) {
    this.name = giveName;
    this.address = givenAddress;
}
Obj.prototype.getName = function() {
    return this.name;
}
Obj.prototype.getAddress = function() {
    return this.address;
}

var obj2 = new Obj("Stephaan")
console.log(obj2);



