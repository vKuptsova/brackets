module.exports = function check(str, bracketsConfig) {
  let obj = {};
  let arr = [];
  for (let i = 0; i<bracketsConfig.length; i++) {
    obj[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }
  for (let j = 0; j<str.length; j++) {
    for (let key in obj) {
      if (obj[key] === str[j]) {
        arr.push(str[j]);
      }
    }
    let el = arr[arr.length-1];
    if (obj[str[j]] === el) {
      arr.pop();
    }
  }
  return arr.length === 0;   
}
