function calculateFactorial(N) {
    if (N < 0) {
        console.log('Factorial is not defined for negative numbers.');
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= N; i++) {
        factorial *= i;
    }
    console.log(factorial);
}

// Sample Input
let N = 5;

// Sample Output
calculateFactorial(N);
