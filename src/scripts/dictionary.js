const splitString = (text) => text.match(/[^ ]+/g)

module.exports = function dictionary(words) {
  const wordList = splitString(words) || []

  return wordList.reduce((current, next) => {
    current[next] = current[next] + 1 || 1

    return current
  }, {})
}
