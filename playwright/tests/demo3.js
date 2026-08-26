function factorial(number) {
	if (!Number.isInteger(number) || number < 0) {
		throw new Error('Factorial is defined for non-negative integers only.');
	}

	let result = 1;
	for (let i = 2; i <= number; i += 1) {
		result *= i;
	}

	return result;
}

module.exports = factorial;

function fibonacci(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('Fibonacci is defined for non-negative integers only.');
  } 
    if (n === 0) {

    return 0;
  }         
    if (n === 1) {  
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}       
module.exports = fibonacci;