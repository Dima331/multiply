module.exports = function multiply(first, second) {
  var firstNumber = first.split('').reverse();
  var secondNumber = second.split('').reverse();

  var sumNumber = "";
  var sumString = 0;
  var residue = 0;
  var decade = 0;
  var zero = 0;
  var zeroString = "";

  var oneNumber = [];
  var fullNumber = [];
  var withZeroArray = []

  for (var i = 0; i < firstNumber.length; i++) {
    for (var j = 0; j < secondNumber.length; j++) {
      sumNumber = (firstNumber[i] * secondNumber[j]) + Number(decade);
      sumString = String(sumNumber);
      if (decade !== "0") {
        decade = 0;
      }

      if (sumNumber >= 10) {
        residue = sumString.slice(-1);
        decade = sumString.slice(0, -1);
        sumString = residue;
      }

      oneNumber.push(sumString);
      sumNumber = 0;

      if(secondNumber.length - 1 == j && decade !== 0) {
        oneNumber.push(decade);
        decade = 0;
      }
    }

    withZeroArray.push(oneNumber.join(''))
    if (zero > 0) {
      for (var k = 0; k < zero; k++) {
        zeroString += "0"
      }
      withZeroArray[withZeroArray.length] = zeroString
      zeroString = "";
    }

    fullNumber.push(withZeroArray.reverse().join(''))
    zero++;
    oneNumber = [];
    withZeroArray = []
  }
  fullNumber.reverse()
  firstnNumTmp = ""

  for (var i = 0; i < fullNumber.length; i++) {
    if (!firstnNumTmp) {
      firstnNumTmp = fullNumber[0]
    }
    firstnNum = firstnNumTmp.split('').join('')

    tmpFullNumber = fullNumber[i + 1];
    if (!tmpFullNumber) {
      tmpFullNumber = "0";
    }
    secondNum = tmpFullNumber.split('').join('')

    
    var tmpSumNum = ""
    var decade = 0;
    for (j = 0; j < firstnNum.length; j++) {
      secondNumTmp = secondNum[j]
      if (!secondNum[j]) {
        secondNumTmp = 0;
      }

      sumNumber = Number(firstnNum[j]) + Number(secondNumTmp) + Number(decade)
      sumString = String(sumNumber);
      if (sumNumber >= 10) {
        residue = sumString.slice(-1);
        decade = sumString.slice(0, -1);
        tmpSumNum += residue
      } else {
        decade = 0;
        tmpSumNum += sumString
      }
    }
    if (decade !== 0) {
      tmpSumNum += decade
    }
    firstnNumTmp = tmpSumNum.split("").join("")
    tmpSumNum.split("").reverse().join("")
  }
  return tmpSumNum.split("").reverse().join("");

}