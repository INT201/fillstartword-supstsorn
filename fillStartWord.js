const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if(word.includes(startWord)){
    return word
  }

}
module.exports = fillStartWord

