# 🧠 String Manipulation & Word Counting

## 📅 Date: [Insert date here, e.g., April 8, 2025]

---

## 🔍 What I Learned

### ✅ String Reversal (Without `.reverse()`)
- Used loops and `+=` to build the reversed version of a string.
- Arrow function for concise logic.
- Learned that `.split('')`, `.reverse()`, and `.join('')` can chain together to reverse strings — but we also did it manually.

### ✅ Counting Specific Word Occurrences (Case-Insensitive)
- `.toLowerCase()` to normalize case.
- `.split(' ')` to break a sentence into words.
- `.filter()` to compare and count matches.
- Handled punctuation issues using `.replace(/[.,!?]/g, '')`.

### ✅ Counting Total Words
- Removed unwanted characters.
- Used `.trim()` and `.split(' ')`.
- Understood how extra spaces can mess up word count.

### ✅ Counting Unique Words
- Created a `Set` from an array of words to remove duplicates.
- Learned that `.size` gives the number of unique items in a Set.
- Understood the difference between `.length` (array) vs `.size` (Set).

---

## 🛠 Bonus Tools/Concepts
- `Set()` to get unique values.
- `.replace()` with regex for cleaning punctuation.
- `.trim()` to remove leading/trailing spaces.

---

## 📌 Sample Challenges Covered
- Reverse a string manually.
- Count how many times a specific word appears.
- Count total words in a sentence.
- Count number of unique words.

---

## 🤯 Notes to Future Me
- Be careful with punctuation messing up word matches.
- `.split(' ')` is not always perfect — consider regex for advanced splitting.
- Practice chaining `.toLowerCase()` + `.replace()` + `.split()` for clean processing.
Remember: .length is for arrays, .size is for Sets.

Use .filter() when matching conditions.

Don't forget trim() when working with user input.

---

## 📦 Folder Structure Idea
string-manipulation-basics/
├── evenNumbers.js
├── reverseString.js
├── wordCount.js
└── README.md
