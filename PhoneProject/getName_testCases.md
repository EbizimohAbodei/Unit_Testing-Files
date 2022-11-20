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

### Test 1: **get name of given phone number using default data**

```js
const register = new PhoneRegister(defaultData);
register.getName("77448233");
```

returns

```json
{
  "firstname": "Matt",
  "lastname": "River"
}
```

### Test 1B: **get name of given phone number using default data**

```js
const TestValues = [
  ["77448233", { firstname: "Matt", lastname: "River" }],
  ["12345677", { firstname: "Leaila", lastname: "Hokki" }],
  ["88234444", { firstname: "Leaila", lastname: "Hokki" }],
  ["88234434", { firstname: "Matt", lastname: "River" }],
];
```

### Test 2: **get name - wrong number or no match found**

```js
const register = new PhoneRegister(defaultData);
register.getName("446655555");
```

returns `null`

### Test 3: **get name with missing paramete**

```js
register.getName();
```

returns `null`
