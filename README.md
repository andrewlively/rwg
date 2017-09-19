# rwg

Random Word Generator

## Dependencies

- Node.js (Tested with 8.3.0+)

## Usage

### NOTE:

In the project's current state, the way words are loaded can cause a race condition. There is an exposed `isReady()` method
which returns a boolean stating if the object is loaded or not. In a future version I might expose an `onReady()` method or some sort
of ready callback.

```js

const RWG = require('rwg');

// Constructor with no limit on words
const rwg1 = new RWG();

rwg1.getRandomWord();

// Constructor with min/max constraints
const rwg2 = new RWG({ min: 3, max: 10 });

rwg2.getRandomWord();

```

### Constructor Options:

- min (Integer): Minimum word length
- max (Integer): Maxmimum word length
