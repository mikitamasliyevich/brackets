module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0){
        return false
      } 
    
     let openArray = [];
     let closeArray = []; 
      for (let i = 0; i < bracketsConfig.length; i++){
        openArray.push(bracketsConfig[i][0])
        closeArray.push(bracketsConfig[i][1])
      }
     let stack = [];
     for (let i = 0; i < str.length; i++){
     if (openArray.indexOf(str[i]) !== -1) {
       if (openArray.indexOf(str[i]) === closeArray.indexOf(str[i]) && str[i] === stack[stack.lenght-1]){
         stack.pop()
       } else {
         stack.push(str[i])
       }
     } else if (closeArray.indexOf(str[i]) !== -1 && closeArray.indexOf(str[i]) ===  openArray.indexOf(stack[stack.lenght-1])) {
       stack.pop()
     } else {
       return false
     }
     if (stack.length > 0){
       return true
     }else {
       return false
     }
    }
}
