
module.exports = function check(str, bracketsConfig) {
  let pairs = Object.fromEntries(bracketsConfig); 
  function getPair() {
    if (i >= str.length) return false;
    const close = pairs[str[i]]; 
    if (!close) return false; 
    for (i = i + 1; i < str.length; i++) {
      if (str[i] === close) return true; 
      if (!getPair()) return false; 
    }
    return false; 
  }

  for (var i = 0; i < str.length; i++) {
    if (!getPair()) return false; 
  }
  return true;
}
