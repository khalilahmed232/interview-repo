function test() {
  console.log(joinStrings("hello", "khalil"));
  console.log(joinStringsCurry("hello")("khalil"));
  // application
  const sayHello = joinStringsCurry("Hello");
  console.log(sayHello("khalil")); // Hello khalil
  console.log(sayHello("ahmed")); // Hello ahmed
  console.log(sayHello("sayeed")); // Hello sayeed
  console.log(sayHello("abeda")); // Hello abeda
}

// without currying:
function joinStrings(first, second) {
  return first + " " + second;
}
// with currying:
function joinStringsCurry(first) {
  return function (second) {
    return first + " " + second;
  };
}
