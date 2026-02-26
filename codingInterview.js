'use strict'

// #1 Reverse a string

/*let string = 'Hello';

// console.log('string length: ', string.length);
// console.log('string[0]', string[0]);
function reverseAString(string) {
    let reverse = '';
    for (let index = string.length - 1; index >= 0; index--) {
        reverse += string[index];
    }

    return reverse;
}

const reversedString = reverseAString(string);

console.log('\nReversed String: ', reversedString);

if (string.toLowerCase() === reversedString.toLowerCase()) {
    console.log('\nPalindrome\n');
} else {
    console.log('\nNot a Palindrome\n');
}*/

// #2 Find maximum number in an array

/*let numbersArr = [7, 2, 99, 0, 9];

const findMax = function (arr) {

    if (arr.length === 0) {
        throw new Error("Array cannot be empty");
    }

    if (arr.length === 1) {
        return arr[0]
    }

    let max = arr[0];

    for (let index = 1; index < arr.length; index++) {
        if (arr[index] > max) {
            max = arr[index];
        }
    }

    return max;

}

const maximumNumber = findMax(numbersArr);

console.log('maximumNumber: ', maximumNumber)*/

// #3 Remove duplicates from array

// Method 1: using loop
/* const duplicateArr = [1, 2, 2, 3, 4, 4, 5];

const removeDuplicate = function (arr) {

    let unique = [];

    for (let index = 0; index < arr.length; index++) {
        if (!unique.includes(arr[index])) {
            unique.push(arr[index])
        }
    }
    return unique;
}

const uniqueArr = removeDuplicate(duplicateArr);

console.log('uniqueArr: ', uniqueArr);*/

// Method 2: using Set Operator

/*const duplicateArr = [1, 2, 2, 3, 4, 4, 5];

const removeDuplicate = function (arr) {
    return [...new Set(arr)];
}

const uniqueArr = removeDuplicate(duplicateArr);

console.log('uniqueArr using Set(): ', uniqueArr);*/
