// Task 1: Write a function that takes an array of numbers and returns only the even numbers using .filter().

// Define the function passing in the parameter;;
function getEvenNumbers(array) {
    // Create a variable to save the filtered result;
    // Use the filter() method to filter the array and return only the even numbers.

    const allEvenNumbers = array.filter(function (num)
    {
        // Check if the number is divisible by 2 without a remainder.
        return num % 2 === 0;
    });
    // Return the filtered result.
    return allEvenNumbers;
}

// Using Arrow Function;
function getEvenNumbers(array) {
    const allEvenNumbers = array.filter((num) => num % 2 === 0);

    return allEvenNumbers;
}

// Compact Version;
const getEvenNumbers = (array) => array.filter((num) => num % 2 === 0);

// Test the function with an array of numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Even Numbers:", getEvenNumbers(numbers)); 


// Task 2: Write a function that returns only the odd numbers from an array;

// Declare the function passing in the parameter;
function getOddNumbers(odd) {
    // Create a new array using the filter() method to filter the given array and return only the odd numbers.
    const allOddNumbers = odd.filter((nums) => nums % 2 !== 0);

    // Return the filtered result.
    return allOddNumbers;
}

// Compact Version;
const getOddNumbers = odd => odd.filter(nums => nums % 2 !== 0);

// Test the function with an array of numbers.
const oddNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Odd Numbers:", getOddNumbers(oddNumbers));


// Task 3: Write a function that returns only the numbers in the array that are greater than 10;

// Declare the function passing in the parameter;
function getNumberGreaterThan10(number) {
    // Create a new array using the filter() method to filter the given array and return only the numbers greater than 10.
    const numbersGreaterThan10 = number.filter((NUM) => NUM > 10);

    // Return the filtered result.
    return numbersGreaterThan10;
}

// Compact Version;
const getNumberGreaterThan10 = number => number.filter((NUM) => NUM >10);

// Test the function with an array of numbers.
const numGreater = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log("Numbers Greater Than 10:", getNumberGreaterThan10(numGreater));


