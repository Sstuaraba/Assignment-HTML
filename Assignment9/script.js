function printNumbers(A, B) {
    let result = '';
    for (let number = A; number <= B; number++) {
        result += number + ' ';
    }
    console.log(result.trim());
}

// Sample Input
let A = 1;
let B = 9;

// Sample Output
printNumbers(A, B)