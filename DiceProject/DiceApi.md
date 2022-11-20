# Dice Class API

This is a Dice class for dice games. Dice stores the number of dots. The number of dots is between 1 and given upper bound(included). The maximum upper bound is 20. The minimum upper bound is 2. If the dice hasn't been rolled yet, number of dots is zero.After the dice has been rolled, the dot count can't become zero anymore.

## Operations

### **Constructor(upper-bound)**

- Initializes the dice with upper bound that is passed as a parameter.
- If no upper bound is given, the default upper bound is 6.
- Initializes dot count to 0

- If upper bound is not an integer, throws an exception `'upper bound must be an integer'`

- If upper bound is not between 2 and 20, an exception is thrown:
  - upper bound > 20: `'Upper bound too big'`
  - upper bound < 2: `'Upper bound too small'`

## Methods

### **roll()**

- Rolls the dice
- When rolled, the dot count becomes a random number between 1 and the upper bound
- returns nothing

### **toString()**

- returns dot count as a string. For example: `'4'`
- If the dice hasn't been rolled yet, returns a text `'Not rolled yet'`

## Getters

#### **dots**

- Returns the number of dots

#### **minimumValue**

- Returns the minimum number of dots of the dice. It should be 1

#### **maximumValue**

- Returns the upper bound of the dice
