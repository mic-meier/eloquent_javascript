const size = 8;

for (let i = 0; i < size; i++) {
    let rowString = "";
    for (let j = 0; j < size; j++) {
        if ((j + i) % 2 == 0) {
            rowString = rowString + " ";
        } else {
            rowString = rowString + "#";
        }
    }
    console.log(rowString);
}

// Alternative using terniary operator
for (let i = 0; i < size; i++) {
    let rowString = "";
    for (let j = 0; j < size; j++) {
        (j + i) % 2 == 0
            ? (rowString = rowString + " ")
            : (rowString = rowString + "#");
    }
    console.log(rowString);
}
