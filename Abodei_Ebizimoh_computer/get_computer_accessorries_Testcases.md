### **get_computer_accessories(searchKey)**

Returns an array of computer accessories. If none found, returns an empty array.

> Parameters:
>
> > searchKey is the id of the computer

> Returns:
>
> > accessories of the computer as an array or if none is found or it is empty or parameter searchKey is missing, returns an empty array.

> Throws:
>
> >

### Test 1: **Correct parameter given**

```js
const register = new ComputerRegiser(testData);
register.get_computer_accessorries(5);
```

returns

```js
["Cooling system", "coffee cup holder", "super power supply"];
```

### Test 2: **out of range parameter**

```js
const register = new ComputerRegiser(testData);
register.get_computer_accessorries(10);
```

return []

### Test 3a: **wrong parameter**

```js
const register = new ComputerRegiser(testData);
register.get_computer_accessorries("a");
```

return []

### Test 3b: **wrong parameter**

```js
const register = new ComputerRegiser(testData);
register.get_computer_accessorries(true);
```

return []

### Test 4: **missing parameter**

```js
const register = new ComputerRegiser(testData);
register.get_computer_accessorries();
```

return []
