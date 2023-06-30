const regex=/catholic/g;
const str1="Nory was a catholic because her mother was catholic because her father was a catholic and her father was a catholic because his father was a catholic because his mother was a catholic,or had been."
document.write(str1);
document.write("<hr/><br/>",str1.replace(regex,"Hindu"));
//Methods:
var regex1=/nory/i;
var output=regex1.exec(str1);
document.write("<br/>",output);
console.log(output);
var matchcase=regex1.test(str1);
document.write("<br/>",matchcase)
let txt="WHAT 288what!!!";
//let result=txt.match(/[0-9]/g);
//below statement only gives small alphabet & numbers because it consistes of global modifier
//let result=txt.match(/[a-z]/g);
//below statement gives samll,capital alphabet and numbers using g and i modifiers
//let result=txt.match(/[a-z,0-9]/gi);
//let result=txt.match(/[WHAT]/g);
//below statement will only give first alphabet of capital string
let result=txt.match(/[a-z]/i);
document.write("<br/>",result);

