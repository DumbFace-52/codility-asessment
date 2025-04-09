// Write a function that logs each element of an array (or list) to the console using the for...of loop.

// Function to log each element of the colors array to the console using the for...of loop.
function logColors(colors) {
    // Iterate through the 'colors' array using the for...of loop;
    for (const color of colors) {
        // Log each 'color' in the array;
        console.log(color);
    }
}

// Sample Test - It will log the colors: red, blue, yellow;
logColors(['red', 'blue', 'yellow']);


/*
Question 1: Sum of Numbers in a Mixed Array
You are given an array with a mix of numbers and non-numeric values (like strings). Your task is to write a function that sums up all the numeric values in the array. Any non-numeric values should be ignored.

Write a function sumNumbersInArray(mixedArray) that:

Takes an array mixedArray as input.

Returns the sum of all numbers in the array.

Example:
sumNumbersInArray([5, 'apple', 7, 3, 'banana', 10]);
Expected Output: 25

*/ 

// Defining the function that takes the parameter mixedArray;
function sumNumbersInArray(mixedArray){
    // Initializing a variable to store cumulative total of numbers;
    let sum = 0;
    // Iterate through each element in the array;
    for (const element of mixedArray) {
        // Checking if type of element is a number;
        if (typeof element === 'number'){
            // If true add number to the sum;
            sum += element;
        } 
    }
    // Return thr total sum of all numbers;
    return sum;
}

// Sample test:
console.log(sumNumbersInArray([1, 2, 'hello', 3, true, 4]));


/*
Question 2: Group Words by Length
You are given an array of words. Your task is to write a function that groups words by their length. The function should return an object where the keys are word lengths and the values are arrays of words with that length.

Write a function groupWordsByLength(words) that:

Takes an array words as input.

Returns an object where the keys are the lengths of words, and the values are arrays containing the words of that length.

Example:
groupWordsByLength(['apple', 'banana', 'pear', 'kiwi', 'plum', 'orange']);
Expected Output:
{ 3: ['pear', 'kiwi', 'plum'], 5: ['apple'], 6: ['banana', 'orange'] }

*/ 

// Declare the function to group words by length;
function groupWordsByLength(words) {
    // Initialize an empty object to store the grouped words;
    let groupedWords = {};

    // Iterating over each word in the array;
    for (const word of words) {
        // Getting the length of th current word;
        let wordLength = word.length;

        // Check if the length is already a key in the object;
        if(!groupedWords[wordLength]) {
            // If not initialize the value as an empty array;
            groupedWords[wordLength] = [];
        }

        // Push the current word into the array of its length;
        groupedWords[wordLength].push(word);

    }

    //Return the object with words grouped by Length;
    return groupedWords;
}

// Sample Test
console.log(groupWordsByLength(['apple', 'banana', 'pear', 'kiwi', 'plum', 'orange']));

/*
Question 3: First Non-Repeating Character
You are given a string, and your task is to find the first character in the string that doesn't repeat. If all characters repeat, return null.

Write a function findFirstNonRepeatingCharacter(str) that:

Takes a string str as input.

Returns the first non-repeating character from the string, or null if no such character exists.

Example:
findFirstNonRepeatingCharacter("swiss");
Expected Output: "w"

findFirstNonRepeatingCharacter("aabbcc");
Expected Output: null

*/ 



// Declare the that groups words based on their first letter;
function groupWordsByFirstLetter(letters) {
    // Initialize an empty object to store grouped words;
    let groupedLetters = {};

    // Looping through the array;
    for (const letter of letters) {
        // Extracting the first letter;
        let firstLetter = letter[0].toLowerCase();

        // Check if the first letter is a key in the object;
        if (!groupedLetters[firstLetter]) {
            // If not we add and initialize an empty array;
            groupedLetters[firstLetter] = [];
        }

        // Push current word into the array associated with the first letter;
        groupedLetters[firstLetter].push(letter);
    }

    // Return the grouped object;
    return groupedLetters;
}

// Sample Test;
console.log(groupWordsByFirstLetter(['apple', 'banana', 'apricot', 'orange', 'avocado', 'blueberry', 'pear']));