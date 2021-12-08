'use strict';

console.log('' + 1 + 0); /// expected output is  "10"   ""- strigifies the numbers to come / I thought "10"
console.log('' - 1 + 0); //expected -1  , Igot -1
console.log(true + false); // it's the sum of their values as number , 1+0 , 1
console.log(6 / '3'); //realized as math divison operation/ result is 2
console.log('2' + '3'); // 23 concat the values
console.log(4 + 5 + 'px'); // result is 9px; sum of numbers concat with string value
console.log('$' + 4 + 5); // result is $45 , first string value stringifies next numbers
console.log('4' - 2); // result is 2, arithmetic operation of finding the difference
console.log('4px' - 2); // result is Nan, string - number
console.log(7 / 0); // result is Infinity
console.log('-9' - 5); // arithmetic operation -9-(-5), result is -14
console.log('-9' + 5); // result is -95 , + operation after string works as concat operation
console.log(null + 1); // result is 1 , null' is falsy value with 0; it is falsy value
console.log(undefined + 1); //returns NaN undefined has no type
