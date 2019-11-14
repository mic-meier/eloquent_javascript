function countBs(userString) {
    let count = 0;
    for (let i = 0; i < userString.length; i++) {
        if (userString[i] == "B") {
            count += 1;
        }
    }
    return count;
}
function countChar(userString, char) {
    let count = 0;
    for (let i = 0; i < userString.length; i++) {
        if (userString[i] == char) {
            count += 1;
        }
    }
    return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
