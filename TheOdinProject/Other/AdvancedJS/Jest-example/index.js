function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  let returnValue = "";
  for (let i = string.length - 1; i >= 0; i--) {
    returnValue += string[i];
  }
  return returnValue;
}

module.exports = { capitalize, reverseString };
