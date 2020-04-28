// accepts number and returns string with number w/ commas

const addCommas = (num) => {
  if (typeof(num) !== 'number') return 'invalid argument. number required'
  if (Math.abs(num) < 1000) return num.toString();

  // 1. convert number to array
  let numArr = Array.from(Math.abs(num).toString());

  // 2. insert comma into 3rd-from-last element of end or decimal point
  let firstIndex = numArr.indexOf('.') === -1 ? numArr.length : numArr.indexOf('.') ;
  numArr.splice(firstIndex-3, 0, ',');

  // 3. identify index of first comma, insert comma into 3rd-from-last of this index.
  //    repeat until indexOf no longer needed (when next index is 3 or less)
  let nextIndexforComma = numArr.indexOf(',');
  while (nextIndexforComma > 3) {
    numArr.splice(nextIndexforComma-3,0,',');
    nextIndexforComma = numArr.indexOf(',');
  }
  
  // 5. concat array to string and return
  if (num < 0) return ('-'+numArr.join(''))
  else return numArr.join('');
}

module.exports = addCommas;