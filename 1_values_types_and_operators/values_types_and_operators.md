# Values, Types and Operators

## Values

Every value has a type (eg. number, string, function etc.). The type determines the value's role.

### Numbers

Numeric values. JS uses 64bits to store numeric values. JS does not differ between integers and floats.

Fractional numbers are written by using a dot.

Numbers can also bw written using scientific notation (ie. 3.14e6).

Arithmetic can be performed on numbers using the arithmetic operators (+, -, \*, and /).

In addition there is the % symbol to represent the remainder operation.

### Special Numbers

`Infinity` - represents positive infinity.

`-Infinity` - represents negative infinity.

`NaN` - Stands for "not a number", but, strangely, is a value of type number.

### Strings

Used to represent text. Written by enclosing their content in quotes (`, ', or "). Special characters (like the newline character) can be escaped with a backslash (\\).

Strings cannot be divided, multiplied, or subtracted. But the + operator allows string concatenation ("glueing" strings together).

Strings with backtick quotes are called template literals. They can embed other values inside \${}. The content inside the curly braces will be computed, converted to a string and included at that position.

## Types

These types are available in JavaScript:

- `String`
- `Number`
- `Boolean`
- `Symbol` (from ES6)
- `Object`

  - `Function`
  - `Array`
  - `Date`
  - `RegExp`

- `Null`
- `Undefined`

The `typeof` operator examines a value and returns its type (as a string).

```javascript
let a;
typeof a; // "undefined"

a = "hello world";
typeof a; // "string"

a = 7;
typeof a; // "number""

a = true;
typeof a; // "boolean"

a = null;
typeof a; // "object" -- weird, bug

a = undefined;
typeof a; // "undefined"

a = { b: "c" };
typeof a; // "object"

a = [1, 2, 3];
typeof a; // "object" -- weird, bug
```

## Operators

### Arithmetic Operators

- \- (addition)
- \+ (subtraction)
- / (division)
- \* (multiplication)
- % (modulus/remainder)

These behave as expected.

### Comparison Operators

- < (smaller than)
- <=(smaller than, or equal to)
- \> (bigger than)
- \>= (bigger than, or equal to)
- == and === (equal to)
- != and !== (not equal to)

There are some subtle differences between the last two, which will be discussed [here](<!-- TODO: Add link -->).

Comparison of values always evaluates to a Boolean value.

### Logical Operators

- && (Logical AND)
- || (Logical OR)
- ! (Logical NOT)

### Ternary Operator

- Boolean ? x : y;

Evaluates a boolean expression on the left of the question mark. If the expression evaluates to true, the middle value will be chosen; if it evaluates to false, the far right value will be chosen.
