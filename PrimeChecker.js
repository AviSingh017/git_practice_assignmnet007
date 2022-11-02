let number = 23
var isprime = true;
for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    isprime = false;
    break;
  }
}
if (isprime == true) {
  console.log("Yes"+num+" is Prime")
} else {
  console.log("No"+num+" is not Prime")
}