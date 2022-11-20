### **getPersonsNumberByType(firstname, lastname, type)**

Method returns an array of phone numbers of a given `type` belonging to a given person with given `firstname` and `lastname`.

If no person with given name is found, an empty array [] is returned.
If no number with given type is found, an empty array [] is returned.
if at least one parameter is missing, an exception `'missing parameter'` is thrown.

For example the work numbers of Leila Hokki:

```json
["22388383", "99437343"]
```

Before tests create register object with default data

### Test 1:

testData

```js
const register = new getPersonsNumberByType("Leila", "Hokki", "work");
```

returns

```json
["04885577", "88234444"]
```

### Test 2: mobile numbers of Matt River

```js
const register = new getPersonsNumberByType("Matt", "River", "mobile");
```

return

```json
["88234434"]
```

### Test 2B: Home numbers of Matt River

```js
const register = new getPersonsNumberByType("Matt", "River", "home");
```

return

```json
["77448233"]
```

### Test 3: wrong type or name returns an empty array []

```js
const register = new getPersonsNumberByType("Matt", "River", "x");
const register = new getPersonsNumberByType("Matt", "x", "mobile");
const register = new getPersonsNumberByType("x", "River", "mobile");
```

### Test 4: missing parameter throws an exception `'missing parameter'`

```js
const register = new getPersonsNumberByType("Matt", "River");
const register = new getPersonsNumberByType("Matt");
const register = new getPersonsNumberByType();
```

### Test 5: Data is empty (no persons found) returns empty array

```js
const register = new PhoneRegister([]);
register.getPersonsNumberByType("Matt", "River", "88234444");
```

returns []
