### **get_diskspace_of_computer_by_computerName(searchKey)**

returns the diskspace of the computer matching the computerName

> Parameters:
>
> > searchKey is the computerName of the computer

> Returns:
>
> > returns the diskspace of computer matching the searchKey computerName or null if no match is found

> Throws:
>
> > If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

## Return

### Test 1: **Providing a correct parameter**

```js
const register = new ComputerRegiser(testData);
register.get_diskspace_of_computer_by_computerName("Xunil 4.7");
```

returns

```js
"1 TB";
```

### Test 2A: **Wrong parameter**

```js
const register = new ComputerRegiser(testData);
register.get_diskspace_of_computer_by_computerName("Xerox");
```

returns null

### Test 2B: **Wrong parameter**

```js
const register = new ComputerRegiser(testData);
register.get_diskspace_of_computer_by_computerName(1234);
```

returns null

### Test 2C: **Wrong parameter**

```js
const register = new ComputerRegiser(testData);
register.get_diskspace_of_computer_by_computerName(true);
```

returns null

### Test 3: **missing parameter**

```js
const register = new ComputerRegiser(testData);
register.get_diskspace_of_computer_by_computerName();
```

Throws an error `'missing parameter'`
