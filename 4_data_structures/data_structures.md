# Data Structures

## Objects

Values of type object are arbitrary collections of properties. They can be created using the Object() constructor, or more easily using the object initializer / literal syntax.

```Javascript
// Empty object using Object() constructor
const myFirstObject = new Object()

// Empty object using literal syntax
const mySecondObject = {}
```

Values can be assigned to properties with the `=` operator. This will reaplce the propertiy`s value if the propery alreadz exists, or create a new property if it didn't.

### Object Properties

Properties of objects can be accessed with dot notation (eg. `object.x`), or with brackets (eg. `object[x]`). X will be interpreted differently. When using dot, the word after the dot is the literal name of the property. When using square brackets, the expression between the brackets is evaluated (and turned into a string) to get the property name.

Property names can be any string, but dot notation only works with valid binding names.

Example:

```Javascript
const myObject = {
  one: 1,
  2: "two",
  "and three": 3
}

// myObject.one -> 1
// myObject["one] -> 1
let x = "one"
// myObject[x] -> 1
// myObject.x -> undefined

// myObject.2 -> SyntaxError: unexpected token: numeric literal
// myObject[2] -> 2
// myObject["2"] -> 2

// myObject["and three"] -> 3
// myobject.and three -> SyntaxError: unexpected token: identifier
```

Elements in an array are stored as the array's properties, using numbers as property names. Setting, or accessing, via non-integers using bracket notation, or dot notation, will not set or retrieve an element from the array itself. Instead, a variable associated with that array`s [object property collection](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Properties) will be set, or accessed. The array's object properties are separate from the list of array elements.

An arrays length property sets or returns the number of element in that array.

```Javascript
const myArr = [1, 2, 3, 4, 5]
// myArr.length -> 5
myArr.length = 7
// myArr.length -> 7
// myArr -> [1, 2, 3, 4, 5, <2 empty slots>]
```

### Object Methods

Objects can also contain properties that hold function values. These properties are then usually referred to as methods.

### Mutability

TODO

### REST Parameter

TODO

### Destructuring

TODO

## JSON

TODO
