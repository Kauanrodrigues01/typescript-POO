/*
O que é agregação?

A Agregação é um tipo de associação entre classes onde uma classe "tem" ou "usa" outra, mas sem uma dependência tão forte.
  - Os objetos podem existir independentemente.
  - É uma relação mais fraca que a associação

Exemplo no mundo real:
  - Um Departamento tem vários Empregados.
  - Se o Departamento for eliminado, os Empregados continuam existindo (eles podem ser transferidos para outro departamento).
*/

class Employee {
  constructor(public name: string) {}
}

class Department {
  private employees: Employee[] = [];

  constructor(public name: string) {}

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  listEmployees(): void {
    console.log(`Employees in department ${this.name}:`);
    this.employees.forEach(emp => console.log(`- ${emp.name}`));
  }
}

// Criando empregados
const alice = new Employee("Alice");
const bob = new Employee("Bob");

// Criando departamento e adicionando empregados
const hr = new Department("Human Resources");
hr.addEmployee(alice);
hr.addEmployee(bob);

hr.listEmployees();
// Employees in department Human Resources:
// - Alice
// - Bob
