# levenshtein
Calculates the edit distance i.e. the minimum number of changes required to turn string A into string B.

Installation:

* run ```npm i lshtein``` in your project directory

Usage:
* As ES6 module:
```javascript
import { lshtein } from 'lshtein/esm'

lshtein('kitten', 'sitting') // outputs 3
```
In this case you may also need to add ```"type": "module"``` to your project's package.json file 

* As CommonJS module:
```javascript
const lsh = require('lshtein')

lsh.lshtein('kitten', 'sitting')
```