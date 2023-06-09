// Question 1
// Answer: {1, 2, 3, 4}

// Question 2
// Answer: 'ref'

// Quetion 3
// Answer: {
//     0: {
//         key: [1, 2, 3],
//         value: true
//     },
//     1: {
//         key: [1, 2, 3],
//         value: false
//     }
// }

// Question 4
// Answer:
const hasDuplicate = (arr) => {
  return [...new Set(arr)].length !== arr.length;
};

// Question 5
// Answer:
const vowelCount = (str) => {
  const vowelCountMap = new Map();
  let splitted = str.split("");
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < splitted.length; i++) {
    if (vowels.includes(splitted[i].toLowerCase())) {
      if (vowelCountMap.has(splitted[i])) {
        vowelCountMap.set(splitted[i], vowelCountMap.get(splitted[i] + 1));
      } else {
        vowelCountMap.set(splitted[i], 1);
      }
    }
  }

  return vowelCountMap;
};
