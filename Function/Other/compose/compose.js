/**
 * @param {...Functions} fns
 * @return Function
 */

// Time: O(n) | Space: O(1)
function compose(...fns) {
  return function (x) {
    let result = x;

    for (const fn of fns.reverse()) {
      result = fn(result);
    }

    return result;
  };
}

// Usage example
const add1 = (num) => num + 1;
const double = (num) => num * 2;
const subtract10 = (num) => num - 10;

const composedFn = compose(subtract10, double, add1);
console.log(composedFn(3)); // (3 + 1) * 2 - 10 => -2
