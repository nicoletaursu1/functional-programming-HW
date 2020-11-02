const custom = require('./ex2');

const sum = (arr) => custom.map(arr, (elem) => elem + 2);
const multiply = (arr) => custom.map(arr, (elem) => elem * 2);
const remove = (arr) => custom.filter(arr, (elem) => elem === 6);

const compose = (arr, functions) => {
  return functions.reduce((acc, func) => {
    return func(acc);
  }, arr);
};

console.log("compose: ", compose(custom.fibArray, [sum, multiply, remove]));