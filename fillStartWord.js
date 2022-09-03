const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if(word == null){
    return underfined
}
if(word.includes(startWord) == true){
  return word
}

}
module.exports = fillStartWord

