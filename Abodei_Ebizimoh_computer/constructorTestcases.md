# Test cases for constructor

## **constructor**

## **test that the missing parameter throws an exception**

```js
new ComputerRegister();
```

This will throw an exception `'Phonedata missing'`

#######################

You could test also if the data passed to the constructor is assigned to an inner field, but that requires knopowledge in objects inner workings (name of the field) so let's just stick to the API and test this later as a side effect of other tests.
