
module.exports = function check(str, bracketsConfig) {
    let i = 0;
    while (i < bracketsConfig.length) 
    {
      let joinBr = bracketsConfig[i].join('');
      if (str.includes(joinBr)) 
      {
          str = str.replace(joinBr,'');
          i= 0;
      } else {
          i++;
      }
    }
    if(str.length){
      return false;
    }else{
      return true;
    }  
}
