//prints the nth element of the sequence

const recursiveFib = (num) => {
  if (num <= 1) return 1;

  return recursiveFib(num - 2) + recursiveFib(num - 1);
};

console.log(recursiveFib(10));

module.exports = { recursiveFib };
