/*
You're given an array of integers. In the array, every integer appears twice except for one. Find that one integer that occurs an odd number of times.

Example:
[9, 3, 9, 3, 9, 7, 9]
Output: 7 Explanation: All numbers except 7 appear an even number of times, but 7 appears only once (odd).
*/

// Declare the function that finds the integer with odd occurrence when called;
function findOddOccurrences(integer) {
    // Initialize a variable to store the results using XOR approach;
    let results = 0;

    // Using for..of to iterate through each number in the array;
    for (const num of integer) {
        // XOR current result w/ current number in the array;
        // XORing a number w/ itself results in 0; so paired numbers cancel each other out;
        results ^= num;
    }

    // After iteration, the result will be the number occurring odd times;
    return results;
} 

// Example Test;
console.log(findOddOccurrences([9, 3, 9, 3, 9, 7, 9]));
console.log(findOddOccurrences([1, 2, 3, 2, 3, 1, 3]));


/*
Given an array of numbers containing n-1 numbers in the range from 1 to n, find the missing number. The array does not contain duplicates, and the numbers are not necessarily in order.

For example:
Input: [3, 7, 1, 2, 8, 4, 5] and n = 8

Output: 6

The challenge here is to solve it efficiently.
*/ 

// Define the function that finds the missing number when invoked;
function findMissingNumber(missing) {
    // Initialize a variable to store the results;
    let results = 0;

    // Iterate through the array; XOR all the numbers in the array;
    for (const number of missing){
        //XOR each number w/ the result;
        results ^= number
    }

    // Step 2: XOR the result with all numbers from 1 to n (where n = missing.length + 1)
    // This will cancel out all the numbers that appear in the array, leaving the missing number as the result
    for (let i = 1; i <= missing.length + 1; i++){
        // XOR the result with each number from 1 to n;
        results ^= i;
    }

    // Return the missing number (results);
    return results;
}

// Sample Test;
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5]));
