# Test cases for the Dice class

## **constructor**

## 1. **no upper bound given**

- Creates a dice with dot count between 1 and 6 (use minimumValue and maximumValue)
- Initializes dot count to zero

## 2. **create dice with upper bounds 2-20**

- Creates a dice with dot count between 1 and upperbound (use minimumValue and maximumValue)
- Initializes dot count to zero (tested in test case 1)

## 3. **test exceptions**

- constructor(12) creates new object with upper bound 12,
- constructor() create new object with upper bound 6,
- constructor('') throws an exception `"upper bound must be an integer"`,
- constructor(2.5) throws an exception `"upper bound must be an integer"`,
- constructor('d') throws an exception `"upper bound must be an integer"`,
- constructor(22) throws an exception `"Upper bound too big"`,
- constructor(1) throws an exception `"Upper bound too small"`,
- constructor(0) throws an exception `"Upper bound too small"`

## **Rolls**

- constructor() rolls dice and dot count becomes a number between 1 and 6, returns nothing,
- constructor(integer(between 2-20)) rolls dice and dot count becomes a number between 1 and number, returns nothing,

## **toString**

In both cases creates a new dice (no upper bound given)

- roll the dice. Compare result string to dots as string
- Don't roll the dice, returns text `'Not rolled yet'`
