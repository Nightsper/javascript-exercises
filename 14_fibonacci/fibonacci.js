const fibonacci = function(num) {
 Number(num)
if (num >= 0) {
 return Math.round(((1 + Math.sqrt(5)) ** num - (1 - Math.sqrt(5)) ** num) / (2 ** num * Math.sqrt(5)));
}
else{return "OOPS"}
};

// Do not edit below this line
module.exports = fibonacci;
