function removeChar(str) {
  let chars = str.slice(1, -1);
  return chars;
}

module.exports = removeChar;