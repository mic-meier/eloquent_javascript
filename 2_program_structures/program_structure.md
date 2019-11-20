# Program Structure

## Expressions and Statements

Expressions are fragments of code that produce a value. In their simplest form they can just be a string literal, number, binary operators etc. The following examples are all expressions:

```Javascript
"some string literal";
7;
true;
typeof(7):
5 < 4;
!false;
```

Expressions can be thought of as words. Using these words we can form complete sentences, which we call statements in JS. A program is nothing more than a list of statements.

## Bindings

Bindings, also called variables, are used to "catch" and hold values. They are created using `=`, also called the assignment operator, in combination with either `var`, `const`, or `let` (described in more detail later on). For example:

```JavaScript
let seven = 7;
const added = 7 + 5;
const batman = "Bruce Wayne";
```

Bindings created with `var` and `let` can be reassigned a new value.

```Javascript
let robin = "Dick Grayson";
robin = "Jason Todd";
```

Bindings can also be created without immediately giving them a value. In this case, `undefined` is returned.

It's possible to assign multiple values at once:

```JavaScript
const catwoman = "Selina Kyle", poisonIvy = "Pamela Isley";
```

### Binding Names

Variable names can not start with any numbers, but they can contain them. They can also not start with any special character, except \$ and \_.

Additionally there are reserved words in JavaScript that can not be used as variable names. A complete list of these can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar).


## Functions

A Function can be thought of as a piece of program that is assigned to a value. They are executed by adding a set of parentheses after the expression that produces a function. Usually a function is executed by adding the parentheses to the variable that holds the function. This is also called calling a function, or invoking a function. The parentheses can contain one or more arguments (values) that are passed into the function.

<!-- TODO: Links to function chapters -->
More on functions [here](link to function chapter) and [here](link to higher order functions).

## Exercises

[Loop a Triangle](./looping_a_triangle.js)

Write a loop that outputs a triangle of hashes.

---

[FizzBuzz](./fizzbuzz.js)

Print all the numbers from 1 to 100, except:

1. If the number is divisible by 3: print "Fizz"
2. If the number is divisible by 5 (and not 3): print "Buzz"
3. If the number is divisible bz both 3 and 5: print "FizzBuzz"

---

[Chessboard](./chessboard.js)
Print a chessboard of size `size` consisting of alternating hashes and empty spaces.

---
