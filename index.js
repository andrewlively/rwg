const fs = require('fs');
const uniqueRandomArray = require('unique-random-array');
const wordListPath = require('word-list');
const _ = require('highland');

const DEFAULT_OPTIONS = {
  min: null,
  max: null
};

module.exports = class RWG {
  constructor(options = DEFAULT_OPTIONS) {
    this._ready = false;

    const a = _(fs.createReadStream(wordListPath, { encoding: `utf8` }))
    .splitBy(`\n`)
    .filter(function(word) {
      if (options.min && word.length < options.min) {
        return false;
      }

      if (options.max && word.length > options.max) {
        return false;
      }

      return true;
    })
    .toArray((words) => {
      this._ready = true;
      this._rand = uniqueRandomArray(words);
    });
  }

  isReady() {
    return this._ready;
  }

  getRandomWord() {
    return this._rand();
  }
}
