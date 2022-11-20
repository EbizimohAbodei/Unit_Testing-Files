### **get_total_price_of_computers_by_processor(searchValue)**

returns the total price of all cars that have the same processor than the given searchValue

> Parameters:
>
> > searchValue is the processor of the computer to be searched

> Returns:
>
> > total cumulative price of computers matching the searchValue

> Throws:
>
> > if no computer with the given searchValue is found throws an exeption `'nothing found with given'`. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

## Return

### Test 1: **Providing a correct parameter**

```js
const register = new ComputerRegiser(testData);
register.get_total_prices_of_computers_by_processor("Selenium II");
```

returns

46

### Test 2A: **Wrong Parameter**

```js
const register = new ComputerRegiser(testData);
register.get_total_prices_of_computers_by_processor("wrong parameter");
```

Throws an exception `'nothing found with given'`

### Test 2B: **Wrong Parameter**

```js
const register = new ComputerRegiser(testData);
register.get_total_prices_of_computers_by_processor(1234);
```

Throws an exception `'nothing found with given'`

### Test 3: **Missing Parameter**

```js
const register = new ComputerRegiser(testData);
register.get_total_prices_of_computers_by_processor();
```

Throws an exception `'missing parameter'`
