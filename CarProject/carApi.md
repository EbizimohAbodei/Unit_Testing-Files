# Car storage API

## cars.json

```json
[
  { "Model": "Bored T-Model", "licence": "ABC-1" },
  { "Model": "S-Model", "licence": "XYZ-3" },
  { "Model": "Bored T-Model", "licence": "GTF-5" },
  { "Model": "GT-Sport", "licence": "B-1" }
]
```

**Search(key, value)**

Function returns an array of cars that matches the given criterion. If no match, returns an empty array.

If the parameters are missing, returns all cars in an array

### Parameters

- key: model or licence.
- value: value to be searched.

### Examples

```json
search('model', 'Nova')
```

returns

```json
[{ "model": "Nova", "licence": "T-Model" }]
```

```json
search('model', 'Bored T-Model')
```

returns

```json
 { "Model": "Bored T-Model", "licence": "ABC-1" },
  { "Model": "Bored T-Model", "licence": "GTF-5" }
```

```json
search("licence", "ABC-1")
```

returns

```json
 { "Model": "Bored T-Model", "licence": "ABC-1" },
  { "Model": "Bored T-Model", "licence": "GTF-5" }
```

```json
search("model", "x")
```

returns

```json
[]
```

```json
search("model")
```

returns

```json
[
  { "Model": "Bored T-Model", "licence": "ABC-1" },
  { "Model": "S-Model", "licence": "XYZ-3" },
  { "Model": "Bored T-Model", "licence": "GTF-5" },
  { "Model": "GT-Sport", "licence": "B-1" }
]
```
