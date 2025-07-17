/*
O que é uma classe abstrta?

Uma classe abstrata é uma classe que não pode ser instanciada diretamente — ou seja, você não pode criar objetos diretamente dela. Ela serve como modelo (ou base) para outras classes que a estendem (herdam).

👉 Assim como uma classe é um molde para objetos,
uma classe abstrata é um molde para outras classes.
*/

abstract class Animal {
  abstract name: string; // atributo abstrato: deve ser definido pela subclasse

  constructor(public age: number) {} // utilizando public aqui, age já é automaticamente definido como public

  // método concreto: já tem implementação, mas pode ser sobreescrito
  sleep(): void {
    console.log(`${this.name} is sleeping...`);
  }

  // método abstrato: força as classes que herdarem Animal a implementarem este método
  abstract makeSound(): void;
}

class Dog extends Animal {
  name: string;

  constructor(name: string, age: number) {
    super(age); // chama o construtor da classe abstrata
    this.name = name;
  }

  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  name: string;

  constructor(name: string, age: number) {
    super(age);
    this.name = name;
  }

  makeSound(): void {
    console.log("Meow!");
  }
}

const dog = new Dog("Bolt", 5);
dog.makeSound(); // Woof! Woof!
dog.sleep();     // Dog is sleeping...

const cat = new Cat("Luna", 3);
cat.makeSound(); // Meow!
cat.sleep();     // Cat is sleeping...
