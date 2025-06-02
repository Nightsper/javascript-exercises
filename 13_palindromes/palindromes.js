const palindromes = function (string) {
  let flatString = string.replaceAll("!", "").replaceAll(",", "").replaceAll(".", "").replaceAll(" ", "").toLowerCase();

let reversed = flatString.split("").reverse().join("");

return flatString == reversed
};


// Do not edit below this line
module.exports = palindromes;
