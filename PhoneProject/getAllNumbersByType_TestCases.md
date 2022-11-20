### **getAllNumbersByType(type)**

Returns an array of object consisting of names and numbers of a given type.

If no number of given type is found, an empty array [] is returned.
If person has a phone with a type which has no number or number is empty, then it is not added to the result
If a person have multiple numbers of given type, each of them will be in it's own object.
If a parameter is missing, an exception `'missing parameter'` is thrown.

The format of the returned object is:

```json
[
  { "firstname": "", "lastname": "", "number": { "type": "", "tel": "" } },
  { "firstname": "", "lastname": "", "number": { "type": "", "tel": "" } }
]
```

For example type work:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hokki",
    "number": { "type": "work", "tel": "04885577" }
  },
  {
    "firstname": "Leila",
    "lastname": "Hokki",
    "number": { "type": "work", "tel": "88234444" }
  },

  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "work", "tel": "123094477" }
  }
]
```

### Test 1: **get all work numbers using default data**

```js
register.getAllNumbersByType("work");
```

returns

```json
[
  {
    "firstname": "Leaila",
    "lastname": "Hokki",
    "number": { "type": "work", "tel": "04885577" }
  },
  {
    "firstname": "Leaila",
    "lastname": "Hokki",
    "number": { "type": "work", "tel": "88234444" }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "work", "tel": "123094477" }
  }
]
```

### Test 2: **get all mobile data using default data**

```js
register.getAllNumbersByType("mobile");
```

returns

```json
[
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "mobile", "tel": "88234434" }
  }
]
```

### Test 2B: **get all home data using default data**

```js
register.getAllNumbersByType("home");
```

returns

```json
[
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": { "type": "home", "tel": "77448233" }
  }
]
```

### Test 3: no numbers of given type found returns empty array []

```js
register.getAllNumbersByType("x");
```

returns []

### Test 4: missing parameter throws an exception `'missing parameter'`

```js
const register = new getAllNumbersByType();
```

throws an exception `'missing parameter'`

### Test 5: Person has type but the correponding number is missing returns empty array []

testData

```json
[
  {
    "firstname": "Vera",
    "lastname": "Jones",
    "phone": [
      { "type": "home", "number": "" },
      { "type": "home" },
      { "type": "home", "number": "23898237" }
    ]
  }
]
```

return

```json
[
  {
    "firstname": "Vera",
    "lastname": "Jones",
    "number": { "type": "home", "tel": "23898237" }
  }
]
```
