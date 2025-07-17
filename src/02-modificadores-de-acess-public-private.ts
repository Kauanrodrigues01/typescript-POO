export {};

/*
Em POO, modificadores de acesso controlam a visibilidade e acesso aos atributos e métodos de uma classe

Por que usar modificadores de acesso?
 - Para proteger os dados internos de uma classe
 - Para controlar como e quando os dados podem ser acessados ou modificados
 - Para reforcar o encapsulamento, um dos 4 pilares da POO

Podificadores de acesso disponíveis no TypeScript:
 - public: Pode ser acessado de qualquer lugar (dentro ou fora da classe)
 - private: Pode ser acessado somente dentro da própria classe
 - protected: Pode ser acessado dentro da classe e subclasses(que herdam da classe principal)
 - readonly: Pode ser lido, mas não modificado depois da atribuição
*/

// public (padrão)
// acessiveis de qualquer lugar
class User {
  public name: string;
  age: number;  // por default o atributo age também é public, mesmo sem ser explícito

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}
const user = new User('Kauan', 17);
console.log(user.name);  // Acesso direto permitido ✅
user.greet();            // Acesso ao método público ✅


// private 
// é privado, só pode ser acessado dentro da classe, classes filhas não podem acessar
// Isso é útil para proteger dados sensíveis, como senhas, saldos de conta ou lógica interna.
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  public getBalance(): number {
    return this.balance;
  }

  private setBalance(value: number): void {
    this.balance = value;
  }
}
const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500 ✅
// account.setBalance(10000000)    // ❌ Erro: setBalance é private
// console.log(account.balance);   // ❌ Erro: balance é private


// protected – Proteção para herança
// só pode ser acessado dentro da classe e em subclasses (classes filhas)
class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  protected speak(): void {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  bark(): void {
    // Pode acessar porque é classe filha
    console.log(`${this.name} barks!`);
    this.speak(); // Também acessa método protegido
  }
}

const dog = new Dog("Rex");
dog.bark();
// Erros:
// console.log(dog.name); ❌
// dog.speak(); ❌


// readonly – Imutável após a atribuição
class Car {
  readonly brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  showBrand(): void {
    console.log(`The car brand is ${this.brand}`);
  }
}

const car = new Car("Toyota");
car.showBrand();
// car.brand = "Honda"; ❌ Error: Não é possível atribuir a 'marca' porque é uma propriedade somente leitura.
