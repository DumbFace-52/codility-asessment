// Task 1: Write a function that counts how many times a certain word appears in a sentence (case-insensitive).

// Declare the function and assign it two parameters: the sentence and the word to count
function countWord(sentence, targetWord) {
    // Clean the sentence: remove common punctuation and convert to lowercase for case-insensitive matching
     // Remove punctuation so words like "patient," become "patient"
    const lowerSentenceCase = sentence.replace(/[.,!?]/g, '').toLowerCase();
    const lowerWordCase = targetWord.toLowerCase();

    // Split the cleaned sentence into individual words
    const wordArray = lowerSentenceCase.split(' ');

    // Filter and keep only the words that match the target word
    const matchingWords = wordArray.filter((word) => word === lowerWordCase);

    // Return the total count of matching words
    return matchingWords.length;
}

// Sample Tests
console.log(countWord("The sun shines and the moon glows. The day is bright!", "the")); 
console.log(countWord("Love is patient, love is kind", "love"));


// Task 2: Write a function that returns the total number of words in a sentence (not just a specific one).
// Example: "I love coding so much" → 5

// Declare the function; assign it a parameter;
function countTotalWords(sentence) {
    // Clean punctuation for more accurate count;
    const cleanedSentence = sentence.replace(/[.,!?]/g, '').toLowerCase();

    // Split the cleaned sentence into an array of words;
    // Use of .trim() to remove any extra spaces at the (start or end of a string);
    const arrayWord = cleanedSentence.trim().split(' ');

    // Return the total number of words;
    return arrayWord.length;
}

// Sample test
console.log(countTotalWords("I love coding so much")); 
console.log(countTotalWords("Wait... what is happening here?!"));


// Task 3: Write a function that counts how many different (unique) words appear in a sentence (case-insensitive).
// Example:"I love coding and I love learning" → 5
// (words: i, love, coding, and, learning)

// Function Declaration;
function countUniqueWords(paragraph) {
    // Normalize the sentence by converting it to lowercase and removing punctuation;
    const cleanParagraph = paragraph.toLowerCase().replace(/[.,!?]/g, '');

    // Split the sentence into words;
    const WordArrays = cleanParagraph.split(' ');

    //  Convert the array into a Set to get only unique words;
    const uniqueWords = new Set(WordArrays);

    // Return the number of unique words
    return uniqueWords.size;
}

// Test the function
console.log(countUniqueWords("I love coding and I love learning"));

