### **getTypes()**

Returns all phone types in an array. The type is added to the result array only once. If there are no phones, or no persons, an empty array [] is returned. If the type is empty (empty string or missing) it is skipped/omitted.

For example

```json
["home", "work", "mobile"]
```

Before tests create register object from the class PhoneRegister

### Test 1: use default data

```js
register.getTypes();
```

returns

```json
["home", "work", "mobile"]
```

### Test 2: person(s) has no phone(s)

Test data:

```json
[
  {
    "firstname": "Leaila",
    "lastname": "Hokki",
    "phone": []
  },
  {
    "firstname": "Matt",
    "lastname": "River"
  }
]
```

```js
const register = new PhoneRegister(testData);
rester.getTypes();
```

Expect this to return an empty array []

### Test 3: No persons in phoneRegister

testData is []

returns an empty array []

### Test 4: Type is missing or is an empty string

testData

```json
[
  {
    "firstname": "Leaila",
    "lastname": "Hokki",
    "phone": [
      { "type": "", "number": "12345677" },
      { "type": "work", "number": "04885577" },
      { "type": "work", "number": "88234444" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phone": [
      { "type": "Work", "number": "123094477" },
      { "type": "home", "number": "77448233" },
      { "type": "mobile", "number": "88234444" }
    ]
  },
  {
    "firstname": "Nathalie",
    "lastname": "Jones",
    "phone": [
      { "number": "123094477" },
      { "type": "cell", "number": "38945555" },
      { "type": "work", "number": "57743834" }
    ]
  }
]
```

expect to get

```json
["work", "home", "mobile", "cell"]
```

create new register with testData

````js
const register = new PhoneRegister(testData);
register.getTypes();
```

expect to get

```json
["work", "home", "mobile", "cell"]
````

### Test 5: Some phones are missing

testData

```js
[
  {
    firstname: "Leaila",
    lastname: "Hokki",
    phone: [],
  },
  {
    firstname: "Matt",
    lastname: "River",
    phone: [
      { type: "work", number: "123094477" },
      { type: "mobile", number: "77448233" },
      { type: "home", number: "88234444" },
    ],
  },
];
```

````js
const register = new PhoneRegister(testData);
register.getTypes();
```

expect to get

```json
["work", "mobile", "home"]
```
````
