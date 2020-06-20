# Levenshtein Edit Distance
Calculates the edit distance i.e. the minimum number of changes needed to turn string A into string B.

### Installation:
* Run ```npm i lshtein``` in your project directory

### Initialization:
The package can be imported as an ES Module in Node v13+ and in Node v12 with the --experimental-modules flag. You may also need to add ```"type": "module"``` to your project's `package.json`.

```javascript
import { lshtein } from 'lshtein';
```

Alternatively you can use CommonJS import:
```javascript
const levens = require('lshtein');
```

### Usage
To get the edit distance for two strings:

```javascript
const distance = lshtein('kitten', 'sitting');

console.log(distance)  // prints 3
```
