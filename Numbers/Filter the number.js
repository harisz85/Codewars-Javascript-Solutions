var FilterString = function(value) {
  //Complete this function :)
  
  let str = value.replace(/[a-z]/gi,"");
  
  str = parseFloat(str);
  
  return  str;
}