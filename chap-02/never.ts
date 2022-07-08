function oldEnough(age: number): never | boolean {
  if(age > 59) {
      throw Error("Too old!");
  }
  if(age <=18){
      return false;
  }
  return true;
}

console.log(oldEnough(17));
console.log(oldEnough(40));
console.log(oldEnough(60));