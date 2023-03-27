// Define a variable with type annotation
const message: string = "Hello, world!";

// Define a function with parameter types and a return type
function addNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

// Define an interface with optional properties
interface Person {
  name: string;
  age?: number;
  email?: string;
}

// Create an object that conforms to the Person interface
const john: Person = {
  name: "John",
  age: 30,
  email: "john@example.com",
};

// Define a class with a constructor and a method
class Greeter {
  private greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return `Hello, ${this.greeting}!`;
  }
}

// Use the class to create a new instance and call the greet method
const greeter = new Greeter("world");
console.log(greeter.greet()); // Output: Hello, world!
