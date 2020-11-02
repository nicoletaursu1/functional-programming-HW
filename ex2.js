console.clear();

// returns first n elements of the sequence:
const fib = (n) => {
  return new Array(n).fill(1).map((elem, i, arr) => {
    i <= 1 ? (arr[i] = 1) : (arr[i] = arr[i - 2] + arr[i - 1]);
    return arr[i];
  });
}

const fibArray = fib(10);
console.log("Fibonacci sequence: ", fibArray);

const map = (arr, cb) => {
  !(cb instanceof Function) && [];

  return arr.reduce((acc, elem) => {
    return [...acc, cb(elem)];
  }, []);
};

console.log("map: ", map(fibArray, elem => elem * 2));

const filter = (arr, cb) => {
  return arr.reduce((acc, elem) => {
    return cb(elem) ? acc : [...acc, elem];
  }, []);
};

console.log("filter: ", filter(fibArray, elem => elem > 10));

const find = (arr, cb) => {
  return arr.reduce((acc, elem) => {
    if (acc !== undefined && acc !== null) return acc;

    if (cb(elem)) {
      return elem;
    }
  }, undefined);
};

console.log("find: ", find(fibArray, elem => elem >= 8));

const some = (arr, cb) => {
  return arr.reduce((acc, elem) => {
    if (acc) return true;

    return !!cb(elem);
  }, false);
};

console.log("some: ", some(fibArray, elem => elem > 2));

const every = (arr, cb) => {
  return arr.reduce((acc, elem) => {
    if (!acc) return false;

    return !!cb(elem);
}, true);
};

console.log("every: ", every(fibArray, elem => elem > 2 ));

module.exports = { fibArray, map, filter, find, some, every }