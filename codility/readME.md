# 🚀 Turing Interview Prep Summary - April 9

---

## ✅ Topics Covered Today:

### 1. XOR & Bitwise Magic
- XOR (^) compares two bits:
  - 1 ^ 1 = 0
  - 0 ^ 0 = 0
  - 1 ^ 0 = 1
  - 0 ^ 1 = 1
- Used in problems where pairs cancel each other out.
- **Example**: Finding a missing number in a sequence where all others are present.

### 2. Iteration Techniques
- `for...of`: cleanest for arrays → directly gives values.
- `for...in`: best for objects → gives keys.
- `for loop`: works everywhere, but more verbose.
- `.filter`, `.map`, `.reduce`: higher-order methods for elegant one-liners.

---

## ✅ Big O Notation (Time & Space Complexity)

### 🕒 Time Complexity:
- Measures **how fast** the algorithm runs.
- `O(n)` → linear (loops through the array once)
- `O(n²)` → nested loops (slower, be careful)
- `O(1)` → constant time (super fast)

### 🧠 Space Complexity:
- Measures **how much extra memory** you use.
- `O(1)` → no extra memory used.
- `O(n)` → using new arrays/objects proportional to input size.

### 🧠 Quick Tip:
Always aim for **O(n)** or better unless required.

---

## ✅ Char Frequency Trick
### Line Explained:
```js
charCount[char] = (charCount[char] || 0) + 1;
```
- If `charCount[char]` is undefined → treat it as 0.
- Then just add 1 → easy char counting!

---

## ✅ Problems You Crushed
1. Grouping words by first letter
2. Grouping words by word length
3. Finding missing number using XOR
4. First non-repeating character (logic understood)
5. Learned char frequency map trick!

---

## 🧠 What You Learned By Doing:
- Breaking down problems step by step
- Building functions cleanly with comments
- Thinking in **space + time complexity**
- Understanding bitwise logic (binary, XOR)
- Using clean JavaScript syntax (`for...of`, destructuring, maps)

---

## 🛌 Next Steps (Tomorrow Before the Test):
- Light practice on 1 or 2 mock Codility-style problems
- Trust your prep — you’ve built muscle memory already
- REST. Sleep = retention 🧠🛌

