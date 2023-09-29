let value1 = 300;
let value2 = 500;
let value3 = 350;

if(value3 > value1) {
    if(value3 > value2) {
       console.log(value3, " value3 biggest one");
   } 
   else {
      console.log(value2, " value2 biggest one");
   }
}
   else if( value1 > value2) {
      console.log(value1, "value1 biggest one");
}
else {
    console.log(value2, "else value2 is biggest");
}
