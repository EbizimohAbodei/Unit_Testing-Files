### **getAllNumbers()**

Returns all phone numbers in an array, each as an object of form:

```json
{
  "firstname": "",
  "lastname": "",
  "phones": []
}
```

The phone object in phones array is of form:

```json
{ "type": "", "number": "" }
```

If a person doesn't have a phone (the phone field is an empty array), the person is not added into the result array.

If all phones are missing an empty array is returned.
If all persons are missing an empty array is returned.

### Test 1: **Using default deta - get all numbers of persons with phone numbers**

```js
register.getAllNumbers();
```

returns

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hokki",
    "number": [
      { "type": "home", "number": "12345677" },
      { "type": "work", "number": "04885577" },
      { "type": "work", "number": "88234444" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": [
      { "type": "Work", "number": "123094477" },
      { "type": "home", "number": "77448233" },
      { "type": "mobile", "number": "88234434" }
    ]
  }
]
```

### Test 2: **All phones missing - get all numbers of persons(phone field is an empty array)**

```js
const register = new PhoneRegiser(testData);
register.getAllNumbers();
```

testData:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hokki",
    "number": []
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": []
  },
  {
    "firstname": "Vera",
    "lastname": "River"
  }
]
```

returns []

### Test 3: **get all numbers of persons(some missing phone numbers)**

```js
const register = new PhoneRegiser(testData);
register.getAllNumbers();
```

testData:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hokki",
    "number": [
      { "type": "home", "number": "12345677" },
      { "type": "work", "number": "04885577" },
      { "type": "work", "number": "88234444" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "number": []
  },
  {
    "firstname": "Vera",
    "lastname": "River"
  }
]
```

returns

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hokki",
    "number": [
      { "type": "home", "number": "12345677" },
      { "type": "work", "number": "04885577" },
      { "type": "work", "number": "88234444" }
    ]
  }
]
```

### Test 4: ** All persons are missing - get all numbers of persons with no data**

```js
const register = new PhoneRegister([]);
register.getAllNumbers();
```

returns []
