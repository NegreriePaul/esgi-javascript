var str = "hello world";
var sentence = "on est champion du monde mon frère";
var obj = new Object();
var prop = "fromage thauvin";
var input = "Mbappé est le meilleur";
var clef = "N'jie";


console.log(ucFirst(str));
console.log(capitalize(sentence));
console.log(camelCase(str));
console.log(snake_case(sentence));
console.log(prop_access(obj,prop));
console.log(leet(str));
console.log(verlan(str));
console.log(yoda(str));
console.log(vig(input, clef));


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

function vig(input, clef)
{
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    input = input.toUpperCase();

    // Vérification de la clef:
    if (clef == null)
        clef = "";
    clef = clef.toUpperCase();
    var clef_long = clef.length;
    var clef_correcte = "";
    for (var i = 0; i < clef_long; i ++)
    {
        var clef_char = alphabet.indexOf (clef.charAt (i));
        if (clef_char>-1) {clef_correcte += alphabet.charAt (clef_char)};
    }
    clef = clef_correcte;
    clef_long = clef.length;
    if (clef_long == 0)
    {
        clef = "a";
        clef_long = 1;
    }

    // (Dé)cryptage:
    output = "";
    var clef_index = 0;
    var n=0;
    for (i=0; i< input.length; i ++)
    {
       var input_char = input.charAt (i);
       var input_char_value = alphabet.indexOf(input_char);
       if (input_char_value>-1)  // ne (dé)chiffre que les 26 lettres majuscules
        {
        
            input_char_value += alphabet.indexOf(clef.charAt(clef_index));
            input_char_value += 26;
            input_char_value %= 26;
              if ((n%5==0) && (n>0)) {output+=" "};
             n++;
            output += alphabet.charAt(input_char_value);
            clef_index = (clef_index+1) % clef_long;
        }
    }
    return output;
}




















