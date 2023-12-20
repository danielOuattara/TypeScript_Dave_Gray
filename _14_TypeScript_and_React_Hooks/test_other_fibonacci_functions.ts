/* Function to measure the time spent on a given function 
----------------------------------------------------------*/
const n = 73; // Adjust the value of n as needed
//----------------------------------------------------------------------
type fibonacciFuncType = (n: number) => number;

const fibonacciFunction_0: fibonacciFuncType = (n) => {
  if (n < 2) {
    return n;
  }
  return fibonacciFunction_0(n - 1) + fibonacciFunction_0(n - 2);
};

const measureTime_0 = (func: () => void): number => {
  const startTime = performance.now();
  func();
  const endTime = performance.now();
  return endTime - startTime;
};

const timeSpent_0 = measureTime_0(() => {
  const result = fibonacciFunction_0(n);
  console.log(`Fibonacci(${n}) = ${result}`);
});

console.log(`Time spent: ${timeSpent_0} milliseconds`);

//------------------------------------------------------------------------
//
type FibonacciFuncType = (
  n: number,
  memo?: { [key: number]: number },
) => number;

const fibonacciFunction: FibonacciFuncType = (n, memo = {}) => {
  if (n < 2) {
    return n;
  }

  if (memo[n] !== undefined) {
    return memo[n];
  }

  memo[n] = fibonacciFunction(n - 1, memo) + fibonacciFunction(n - 2, memo);
  return memo[n];
};

const measureTime = (func: () => void): number => {
  const startTime = performance.now();
  func();
  const endTime = performance.now();
  return endTime - startTime;
};

const timeSpent = measureTime(() => {
  const result = fibonacciFunction(n);
  console.log(`Fibonacci(${n}) = ${result}`);
});

console.log(`Time spent: ${timeSpent} milliseconds`);
