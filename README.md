# Levenshtein Edit Distance
Calculates the edit distance i.e. the minimum number of changes needed to turn string A into string B.

### Installation:
* Run ```npm i lshtein``` in your project directory.

### Initialization:
The package can be imported as an ES Module in Node 13.2.0+ or in Node 12 with the `--experimental-modules` flag. You may also need to add `"type": "module"` to your project's `package.json`. 

```javascript
import { lshtein } from 'lshtein';
```

Import as a CommonJS module is also possible:
```javascript
const lshtein = require('lshtein');
```

### Usage
Use the `lshtein` function and provide two strings to get the edit distance between them:
```javascript
const distance = lshtein('kitten', 'sitting');

console.log(distance)  // prints 3
```
