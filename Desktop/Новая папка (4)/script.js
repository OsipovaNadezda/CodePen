function getResult(x, y) {
    let result=0;
    let pow = Math.pow(x, y);
    let powString = String(pow);

    for (let i = 0; i < powString.length; i++) {
        
        result += +powString[i];
    }
    console.log(pow);
    
      return result;
}
console.log(getResult(4, 8));