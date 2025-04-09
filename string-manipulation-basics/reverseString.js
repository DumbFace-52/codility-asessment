// Task 1: Write a function that takes a string ad returns it reversed; Example: input; "hello", output; "olleh";

// Hint: You can use methods like .split(), .reverse(), and .join() in combination with reverse string.

// Declare the function that takes a parameter string;
function reverseString(string) {
    // Split the string onto an array of characters;
    const characters = string.split('');

    // Reverse the array of characters;
    const reversedCharacters = characters.reverse();

    // Join the reversed array of characters back into a string;
    const reversedString = reversedCharacters.join('');

    // Return the reversed string;
    return reversedString;
}

// Using arrow function;
// const reverseString = (string) => string.split('').reverse().join('');

// Test the function;
console.log(reverseString("Hello world")); 
console.log(reverseString("world"));      
console.log(reverseString(""));           
console.log(reverseString("123 456!"));  


// Task 2: Write a function that reverses a given string without using .reverse().

// Declare a function; pass in a parameter;
function reverseStringWithoutReverse(string) {
    // Declare a variable to store the reversed string;
    let reversedString = '';

    // Iterate over each character in the string from the end to the beginning;
    for (let i = string.length - 1; i >= 0; i--) {
        // Append each character to the reversedString;
        reversedString += string[i];
    }

    // Return the reversed string;
    return reversedString;
}

// Using arrow function;


// Testing the function;
console.log(reverseStringWithoutReverse("Hello world"));
console.log(reverseStringWithoutReverse("world"));
console.log(reverseStringWithoutReverse(""));
console.log(reverseStringWithoutReverse("123 456!"));



// Task 3: Given a sentence, reverse each word individually but keep the order of the words intact. Example: Input; "Hello world", Output; "olleH dlrow";

// Define the function;
function reversedWords(sentence) {
    // Split the sentence into an array of words;
    const wordsArray = sentence.split(' ');

    // Reverse each word using map() to iterate over each word;
    const reversedWordsArray = wordsArray.map(function (word)
    {
        // Reverse each individual word;
        return word.split('').reverse().join('');
    });

    // Join the reversed words back into a sentence;
    const reversedSentence = reversedWordsArray.join(' ');

    // Return the reversed sentence;
    return reversedSentence;
}

// Using arrow function;
// const reversedWords = (sentence) => sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');

// Test the function
console.log(reversedWords("hello world")); 
