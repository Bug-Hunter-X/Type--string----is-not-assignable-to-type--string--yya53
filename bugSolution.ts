function greeter(person: string): string {
  return `Hello, ${person}!`;
}

let user = ["Jane", "Doe"];
let fullName = user.join(" ");
console.log(greeter(fullName)); //Correct