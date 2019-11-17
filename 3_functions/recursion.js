function isEven(int) {
    let absInt = Math.abs(int);
    if (absInt === 0) {
        return true;
    } else if (absInt === 1) {
        return false;
    } else {
        return isEven(absInt - 2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-2));

