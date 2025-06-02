const getTheTitles = function(arr) {
  return arr.reduce((accumulator, current) => {
    accumulator.push(current.title);
    return accumulator
  }, []
  )
};

// Do not edit below this line
module.exports = getTheTitles;
