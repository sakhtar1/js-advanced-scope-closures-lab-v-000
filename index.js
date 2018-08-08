function produceDrivingRange(tripWithRange) {
  return function(num1, num2){
    if ((num1 - num2) > 10) {
      return false
    } else {
      return true
    }
  }
}