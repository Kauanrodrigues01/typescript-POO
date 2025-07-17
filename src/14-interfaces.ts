export {};

/*
O que são Interfaces?

Interfaces são estruturas que permitem definir contratos para objetos, classes ou funções. Eles especificam a forma que um objeto devet ter.
*/

// Definimos um contrato com as propriedades obrigatórias
interface User {
  readonly name: string;
  age: number;
  isAdmin: boolean;
}

// Um objeto que implementa o contrato da interface
const user: User = {
  name: "Kauan",
  age: 18,
  isAdmin: true,
};


// Interfaces com propriedades opcionais
interface Product {
  id: number;
  name: string;
  description?: string; // propriedade opcional
}

const book: Product = {
  id: 1,
  name: "Clean Code",
};


// Interface com métodos
interface Logger {
  log(message: string): void;
  error(message: string): void;
}

const consoleLogger: Logger = {
  log(message) {
    console.log(`Log: ${message}`);
  },
  error(message) {
    console.error(`Error: ${message}`);
  },
};


// Interfaces em classes
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  constructor(public name: string) {}

  makeSound(): void {
    console.log("Woof!");
  }
}

const myDog = new Dog("Rex");
myDog.makeSound(); // Woof!


// Extensão de interfaces (herança)
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}

const worker: Employee = {
  name: "Carlos",
  salary: 3500,
};
