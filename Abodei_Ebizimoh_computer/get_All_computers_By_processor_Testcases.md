### **get_All_computers_By_processor(searchValue)**

searches computers with given processor

> Parameters:
>
> > searchValue is the processor of the computer to be searched

> Returns:
>
> > Returns an array of computer objects of given processor. If no computer of given processor is found, returns an empty array.

> Throws:
>
> > If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

## Return

### Test 1: **get all computer by processor(correct data provided)**

```js
const register = new ComputerRegiser(testData);
register.get_All_computers_By_processor("Selenium II");
```

returns

```js
[
  {
    id: 2,
    computerName: "MaxEffect 2000",
    processor: "Selenium II",
    price: 10,
    diskspace: "500 GB",
    accessories: ["cleaning set", "coffee cup holder", "Cooling system"],
    extras: {
      model: "gold",
      consumption: "A+",
      notes: "no comments",
    },
  },
  {
    id: 3,
    computerName: "Beast II",
    processor: "Selenium II",
    price: 36,
    diskspace: "4 TB",
    accessories: ["coffee cup holder", "super power supply", "Super fan"],
    extras: {
      model: "chrome",
      consumption: "E",
      notes: "no comments",
    },
  },
];
```

### Test 2A: **Object not found**

```js
const register = new ComputerRegiser(testData);
register.get_All_computers_By_processor("pentium one");
```

returns
[]

### Test 2B: **Object not found**

```js
const register = new ComputerRegiser(testData);
register.get_All_computers_By_processor(1234);
```

return
[]

### Test 2C: **Object not found**

```js
const register = new ComputerRegiser(testData);
register.get_All_computers_By_processor(true);
```

return
[]

### Test 3: **Parameter missing**

```js
const register = new ComputerRegiser(testData);
register.get_All_computers_By_processor();
```

Throws an error `'missing parameter'`
