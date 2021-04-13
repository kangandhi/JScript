// JSON
// backticks are called template literals in javascript
obj = {"name": 'kanchan', length: 1, a:{this: 'tha"t'}}
jso = JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);

parsed = JSON.parse(`{"name": "kanchan", "length":1}`)
console.log(parsed);