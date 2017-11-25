// Write a function named minDistance/MinDistance that returns the smallest distance between two factors of a number,the input will be number greater than one.
//
// example:
//
// number=13013 has factors
// [ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013 ]

//minDistance(number) return 2 //13-11


function minDistance(num) {

    var half = Math.floor(num / 2), // Ensures a whole number <= num.
    // 1 will be a part of every solution.
        str = '1',
        temp = [],
        i, j;

    // Determine our increment value for the loop and starting point.
    num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

    for (i; i <= half; i += j) {
        num % i === 0 ? str += ',' + i : false;
    }

    str += ',' + num; // Always include the original number.


    let arr = str.split(',').map((n) => parseInt(n));
    for (var k = arr.length-1; k >= 1; k--) {

      temp.push(arr[k] - arr[k-1]);
      temp.sort((a,b) => a-b);
    }
    console.log("The shortest distance between two factors of " + num + " is", temp[0]);
    return temp[0];
}

minDistance(13013);
