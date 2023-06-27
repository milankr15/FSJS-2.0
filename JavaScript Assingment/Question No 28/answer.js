
function printTriangle(n) {
    let arr = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i + 1; j++) {
            arr += "*";
        }
        arr += '\n';
    }

    return arr;
}

function printSquare(n) {
    let arr = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            arr += "*";
        }
        arr += '\n';
    }

    return arr;
}

function printPyramid(n) {
    let arr = "";

    for (let i = 1; i <= n; i++) {
        // printing spaces
        for (let j = 1; j <= n - i; j++) {
            arr += " ";
        }
        // printing star
        for (let k = 0; k < 2 * i - 1; k++) {
            arr += "*";
        }
        arr += "\n";
    }

    return arr;
}


console.log(printTriangle(5));
console.log(printSquare(5));
console.log(printPyramid(3));
