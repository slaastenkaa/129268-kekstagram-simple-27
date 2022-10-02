function getRandomInt(min, max) {
  if(0 <= min || 0 <= max) {
    return Math.floor(min + Math.random() * (max - min));
  }
  return NaN;
} // https://learn.javascript.ru/number

function getMaxSting(str, maxLength) {
  //const maxStr = maxLength > 20 || maxLength < 140;
  if(maxLength > str.length || maxLength < str.length) {
    return true;
  }
  return false;
}

getRandomInt();
getMaxSting();
