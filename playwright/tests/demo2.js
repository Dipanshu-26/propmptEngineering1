function factorial(number) {
	if (!Number.isInteger(number) || number < 0) {
		throw new Error('Factorial is defined for non-negative integers only.');
	}

	let result = 1;
	for (let i = 2; i <= number; i++) {
		result *= i;
	}

	return result;
}


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

function isPrime(num) {
    if (!Number.isInteger(num) || num < 2) {
        return false;
    }       

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }               
    }
    return true;
}      

module.exports = isPrime;   

function isEven(num) {
    if (!Number.isInteger(num)) {
        throw new Error('isEven is defined for integers only.');
    }       
    return num % 2 === 0;
}   

module.exports = isEven;    

function isOdd(num) {
    if (!Number.isInteger(num)) {
        throw new Error('isOdd is defined for integers only.');
    }           
}