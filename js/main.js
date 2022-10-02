function getRandomInt(min, max) {
  if(0 <= min || 0 <= max) {
    return Math.floor(min + Math.random() * (max - min));
  }
  return NaN;
} // https://learn.javascript.ru/number

function getMaxSting(str) {
  if(20 < str.length || 140 < str.length) {
    return true;
  }
  return false;
}

getRandomInt();
getMaxSting();
