/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {any}
 */

// Solution 1
// Time: O(1) | Space: O(1)
Function.prototype.myCall = function (thisArg, ...args) {
  return this.apply(thisArg, args);
};

// Solution 2
// Time: O(1) | Space: O(1)
Function.prototype.myCall = function (thisArg, ...argArray) {
  const sym = Symbol();
  const wrapperObj = Object(thisArg);

  Object.defineProperty(wrapperObj, sym, {
    enumerable: false,
    value: this,
  });

  return wrapperObj[sym](...argArray);
};

// Usage example
function multiplyAge(multiplier = 1) {
  return this.age * multiplier;
}

const mary = {
  age: 21,
};

const john = {
  age: 42,
};

console.log(multiplyAge.myCall(mary)); // => 21
console.log(multiplyAge.myCall(john, 2)); // => 84
