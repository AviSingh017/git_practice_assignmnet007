let number = 23
var isprime = true;
for (let i = 1; i <= num; i++) {
  if (number % i == 0) {
    isprime = false;
  }
}
if (isprime == true) {
  console.log("Yes")
} else {
  console.log("No")
}