var array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);
for (var i = 0; i < array.length; array++) {
    if (i == 2) {
        break;
    }
    console.log('array[i]');
}
