# Phone API

## Data

The data will be in a json file. Person is uniquely identified by firstname and lastname. There can't be two persons with the same firstname and lastname. Phone numbers are also unique.

### Phone.json

```json
[
  {
    "firstname": "Leaila",
    "lastname": "Hokki",
    "phone": [
      { "type": "home", "number": "12345677" },
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
  }
]
```

## Class Phoneregister

### **Constructor(data)**

Phone valid json-array is passed as a parameter `data`. If the parameter is missing, throws an exception `'Phonedata missing'`

### **getTypes()**

Returns all phone types in an array. The type is added to the result array only once. If there are no phones, or no persons, an empty array [] is returned. If the type is empty (empty string or missing) it is skipped/omitted.

For example

```json
["home", "work", "mobile"]
```

### **getPersonsNumberByType(firstname, lastname, type)**

Method returns an array of phone numbers of a given `type` belonging to a given person with given `firstname` and `lastname`.

If no person with given name is found, an empty array [] is returned.
If no number with given type is found, an empty array [] is returned.
if at least one parameter is missing, an exception `'missing parameter'` is thrown.

For example the work numbers of Leila Hokki:

```json
["22388383", "99437343"]
```

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

### **getName(number)**

The method searches for the given phone number. If the number is found, returns a json object of form:

```json
{ "firstname": "", "lastname": "" }
```

If no phone matches the given number, then `null` is returned.
If the parameter is missing, `null` is also returned.

For example get the owner of "88234444"

```json
{
  "firstname": "Matt",
  "lastname": "River"
}
```
