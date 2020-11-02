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

console.log("map: ", map(fibArray, (elem) => {
    return elem * 2;
  })
);

const filter = (arr, cb) => {
  return arr.reduce((acc, elem) => {
    return cb(elem) ? acc : [...acc, elem];
  }, []);
};

console.log("filter: ", filter(fibArray, (elem) => {
    return elem > 10;
  })
);

const find = (arr, cb) => {
  return arr.reduce((acc, elem) => {
    return cb(elem) ? [...acc, elem] : acc;
  }, []);
};

console.log("find: ", find(fibArray, (elem) => {
    return elem >= 8;
  })
);

const some = (arr, cb) => {
  const reduced = arr.reduce((acc, elem) => {
    return cb(elem) ? [...acc, true] : [...acc, false];
  }, []);
  const trueElements = filter(reduced, (elem) => {
    return !elem;
  });

  return trueElements.length ? true : false;
};

console.log("some: ", some(fibArray, (elem) => {
    return elem > 2;
  })
);

const every = (arr, cb) => {
  const reduced = arr.reduce((acc, elem) => {
    return cb(elem) ? [...acc, true] : [...acc, false];
  }, []);

  const falseElements = filter(reduced, (elem) => {
    return elem;
  });

  return falseElements.length ? false : true;
};

console.log("every: ", every(fibArray, (elem) => {
    return elem > 0;
  })
);

module.exports = { fibArray, map, filter, find, some, every }