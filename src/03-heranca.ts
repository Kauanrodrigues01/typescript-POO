export {};

/*
Herança é um dos pilares da Programação Orientada a Objetos. Ela permite que uma classe filha (subclasse) herde propriedades e métodos de uma classe pai (superclasse), promovendo reutilização de código e organização lógica.
*/

class Person {
  protected readonly name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  protected getAge(): number {
    return this.age;
  }

  public greet(): void {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

class Employee extends Person {
  private role: string;

  constructor(name: string, age: number, role: string) {
    super(name, age); // chama o construtor da classe pai
    this.role = role;
  }

  public describe(): void {
    // this.name está acessível pois é protected
    console.log(`${this.name} is a(n) ${this.role} and is ${this.getAge()} years old.`);
  }
}

const employee = new Employee("Alice", 30, "Software Developer");

employee.greet();     // "Hello, my name is Alice."
employee.describe();  // "Alice is a(n) Software Developer and is 30 years old."

// employee.name -> ❌ Erro: name é protected
// employee.age -> ❌ Erro: age é private
// employee.getAge() -> ❌ Erro: método protegido, só acessível na classe ou subclasses