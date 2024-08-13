/**
 * @param {string} str 
 * @return {string | string[]}
 */

const count = function (str) {
  const map = new Map();
  const result = [];
  
  for (const char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  const max = Math.max(...map.values());
  
  for (const [key, value] of map) {
    if (value === max) {
      result.push(key);
    }
  }

  return result.length === 1 ? result[0] : result;
}

// example
/*
console.log(count('abbccc')); // 'c'
console.log(count('abbcccddd')); // ['c', 'd'];
*/