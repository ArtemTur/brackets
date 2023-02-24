module.exports = function check(str, bracketsConfig) {
let another = str;
  while (str.length > 0) {
    str = str.replace("()", "");
    str = str.replace("{}", "");
    str = str.replace("[]", "");
    str = str.replace("||", "");
    str = str.replace("12", "");
    str = str.replace("34", "");
    str = str.replace("56", "");
    str = str.replace("77", "");
    str = str.replace("88", "");
      if (str.length === another.length) {
        return false;
      } else {
        another = str;
      };
    };
    return true;
  }
  
  
 

