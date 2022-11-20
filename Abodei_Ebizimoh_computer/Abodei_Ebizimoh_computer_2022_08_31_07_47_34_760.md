Ebizimoh Abodei

# **End assignment** (computer)

## Task: Create and test ComputerRegister class

Create a class `ComputerRegister` for computer data. Data storage is passed to the constractor as a parameter. Data is in a json array. Use the following json array as default storage. You may need to modify the data or add more versions for testing.

### datastorage.json

```json
[
  {
    "id": 1,
    "computerName": "King 3000",
    "processor": "X-Force",
    "price": 36,
    "diskspace": "20 GB",
    "accessories": ["Cooling system", "Super fan", "coffee cup holder"],
    "extras": {
      "model": "XXL",
      "consumption": "C",
      "notes": "high capacity"
    }
  },
  {
    "id": 2,
    "computerName": "MaxEffect 2000",
    "processor": "Selenium II",
    "price": 10,
    "diskspace": "500 GB",
    "accessories": ["cleaning set", "coffee cup holder", "Cooling system"],
    "extras": {
      "model": "gold",
      "consumption": "A+",
      "notes": "no comments"
    }
  },
  {
    "id": 3,
    "computerName": "Beast II",
    "processor": "Selenium II",
    "price": 36,
    "diskspace": "4 TB",
    "accessories": ["coffee cup holder", "super power supply", "Super fan"],
    "extras": {
      "model": "chrome",
      "consumption": "E",
      "notes": "no comments"
    }
  },
  {
    "id": 4,
    "computerName": "Xunil 4.7",
    "processor": "PiTron 3",
    "price": 36,
    "diskspace": "1 TB",
    "accessories": ["Super fan", "super power supply", "Cooling system"],
    "extras": {
      "model": "VIP",
      "consumption": "C",
      "notes": "no comments"
    }
  },
  {
    "id": 5,
    "computerName": "Cera 2400",
    "processor": "X-Force",
    "price": 123,
    "diskspace": "500 GB",
    "accessories": ["Cooling system", "coffee cup holder", "super power supply"]
  }
]
```

# ComputerRegister API

## Constructor

### **constructor(jsondata)**

Initializes ComputerRegister object

> Parameters:
>
> > The data storage json object is passed as a parameter to the constructor.

> Returns:
>
> >

> Throws:
>
> > If the parameter is missing, constructor throws an error `'data storage missing'`

## Methods

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

# The project

## Create a folder for the testproject

- the name of the folder should be `Abodei_Ebizimoh_computer`
- create **package.json**
  - **`npm init -y`**
- install **jest** as development dependency
  - **`npm install jest --save-dev`**
- create folder `__tests__` for tests
- edit the test script in the **package.json**
- use **datastorage.json** as a data source

## Design test cases in separate .md -file

## Implement all tests and test them to fail

## Implement corresponding methods

## Test the project until all tests pass

## Submit the project folder

Submit your project folder acording to instructions given separately.
Remove the `node_modules` folder before submitting.
The project folder should include `package.json` file
