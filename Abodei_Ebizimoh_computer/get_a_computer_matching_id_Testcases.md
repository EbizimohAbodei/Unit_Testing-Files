### **get_a_computer_matching_id(searchKey)**

Method searches the datastorage for an object with given searchKey. Key is unique.

> Parameters:
>
> > searchKey is the primary key id of the computer

> Returns:
>
> > returns the computer object matching the id or null if there is no match

> Throws:
>
> > if parameter searchKey is missing, throws an exception `'missing parameter'`

### Test 1A: **Providing a correct parameter**

```js
const register = new ComputerRegiser(testData);
register.get_a_computer_matching_id(1);
```

returns

```js
{
id: 1,
computerName: "King 3000",
processor: "X-Force",
price: 36,
diskspace: "20 GB",
accessories: ["Cooling system", "Super fan", "coffee cup holder"],
extras: {
    model: "XXL",
    consumption: "C",
    notes: "high capacity",
},
}
```

### Test 1B: **Decimals as a parameter**

```js
const register = new ComputerRegiser(testData);
register.get_a_computer_matching_id(1.2);
```

returns null

### Test 1C: **Out of range parameter**

```js
const register = new ComputerRegiser(testData);
register.get_a_computer_matching_id(99);
```

returns null

### Test 1D: **Boolean as a parameter**

```js
const register = new ComputerRegiser(testData);
register.get_a_computer_matching_id(true);
```

returns null

### Test 2: **Missing parameter**

```js
const register = new ComputerRegiser(testData);
register.get_a_computer_matching_id();
```

Throws an exception `'missing parameter'`
