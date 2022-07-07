let val: unknown = 22;
console.log(val);

val = "string value";
console.log(val);

val = new Array();
if(val instanceof Array){
  val.push(33);
}
console.log(val);