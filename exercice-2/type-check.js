var arg1 = 1;
var arg2 = "number";
var item = "foo";
var value = {type:"string",value:"foo"};


console.log(type_check_v1(arg1,arg2));
console.log(type_check_v2(item, value));



function type_check_v1(arg1,arg2){
	
	if (typeof(arg1) === arg2){
		
	return true;	
	}
	else
	{
	return false;
	}
}



function type_check_v2(item, value){
   if (typeof value === 'object') {
       if (value.type !== undefined) {
           if (value.value !== undefined)
               return typeof item === value.type && item === value.value;
           else
               return typeof item === value.type;

       }
       else if (value.enum !== undefined) {
           return value.enum.includes(typeof item);
       }
   }
   else {
       console.log('Second argument needs to be an object, please retry and use an object')
   }
}



