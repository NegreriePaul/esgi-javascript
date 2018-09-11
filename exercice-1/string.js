var str = "hello world";
var sentence = "on est champion du monde mon frère";
var obj = new Object();
var prop = "fromage thauvin";

function ucFirst(str) {
  if (str.length > 0) {
    return str[0].toUpperCase() + str.substring(1);
  } else {
    return str;
  }
}

function capitalize(sentence){
   var splitStr = sentence.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
              splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
     return splitStr.join(' '); 
}

function camelCase(str){
	
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join('');  
}

function snake_case(sentence){
	
	var splitStr = sentence.toLowerCase().split(' ').join('_');
	
     return splitStr; 	
}

function prop_access(obj,prop){
	
    var object = obj;
    var obj_class = object.constructor.name;
    var prop = prop.split(' ');
    var tab = [];
    for (var i = 0; i < prop.length ; i++) {
        object = object[prop[i]];
        tab[i] = prop[i];
        if (typeof object === "undefined") {
            return obj_class + "." + tab.join('.');
        }
    }
    return object;
}
	

function leet(str){

   let messagesLeet = '';

   for (var i = 0; i < str.length; i++) {
       if (str[i].toLowerCase() === "i") {
	        messagesLeet += "1"; 
	        }
       else if (str[i].toLowerCase() === "e") {
	        messagesLeet += "3"; 
	        }
       else if (str[i].toLowerCase() === "a") { 
	       messagesLeet += "4"; 
	       }
       else if (str[i].toLowerCase() === "o") { 
	       messagesLeet += "0"; 
	       }
       else if (str[i].toLowerCase() === "u") {
	       messagesLeet += "(_)"; 
	       }
       else if (str[i].toLowerCase() === "y") {
	        messagesLeet += "7";
	         }
       else { 
	       messagesLeet += str[i].toLowerCase(); 
	       }
   }

   return messagesLeet;
}

function verlan(str){
   return str.split('').reverse().join('').split(' ').reverse().join(' ');
}

function yoda(str){
   return str.split(' ').reverse().join(' ');
}





console.log(ucFirst(str));
console.log(capitalize(sentence));
console.log(camelCase(str));
console.log(snake_case(sentence));
console.log(prop_access(obj,prop));
console.log(leet(str));
console.log(verlan(str));
console.log(yoda(str));

















