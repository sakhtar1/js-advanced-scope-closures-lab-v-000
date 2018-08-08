function produceDrivingRange(blockRange) {
  return function(num1, num2){
    let drivingDis = Math.abs(parseInt(num2) - parseInt(num1));
    let range = Math.abs(drivingDis - blockRange);
    if (drivingDis > blockRange) {
      return `${range} blocks out of range`
    } else {
      return `within range by ${range}`
    };
  };
};

function produceTipCalculator()