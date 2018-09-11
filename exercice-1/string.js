var str = "hello world";

function ucFirst(str) {
  if (str.length > 0) {
    return str[0].toUpperCase() + str.substring(1);
  } else {
    return str;
  }
}
console.log(ucFirst(str));


var sentence = "on est champion du monde mon frère"

function capitalize(sentence){
   var splitStr = sentence.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
              splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
     return splitStr.join(' '); 
}

console.log(capitalize(sentence));


function camelCase(str){
	
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(''); 

  
}
console.log(camelCase(str));