/*
Vamos simular um sistema de cadastro de funcionários com três tipos distintos:

  - Funcionário regular (RegularEmployee)
  - Freelancer
  - Contratado administrativo (AdminContractor)

O sistema usa os seguintes conceitos da Programação Orientada a Objetos em TypeScript:

✅ Uma interface `Payable` que define um contrato obrigatório para cálculo de salário (`calculateSalary()`), aplicada de forma polimórfica em diferentes tipos de funcionário, inclusive fora da hierarquia comum.

✅ Um type alias `Address` para definir a estrutura do endereço do funcionário, promovendo reutilização e legibilidade.

✅ Uma classe abstrata `EmployeeBase`, que encapsula dados e comportamentos comuns a funcionários que possuem vínculo padrão com a empresa. Nela está o método abstrato `calculateBonus()`, obrigatório para quem herda.

As implementações concretas são:

1. `RegularEmployee` – funcionário CLT com salário fixo e bônus (herda de `EmployeeBase` e implementa `Payable`)
2. `Freelancer` – prestador de serviço por hora, sem bônus (herda de `EmployeeBase` e implementa `Payable`)
3. `AdminContractor` – funcionário administrativo terceirizado, **independente da hierarquia** `EmployeeBase`, mas que implementa `Payable`, demonstrando o poder da interface como contrato externo.

Essa estrutura permite aplicar conceitos como:
  - Herança
  - Abstração
  - Encapsulamento
  - Interface como contrato de comportamento
  - Polimorfismo via interface

Também reforça boas práticas como separação de responsabilidades, validações nos setters e uso de tipos reutilizáveis.

*/

type ID = (number | string);

type Address = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

interface Payable {
  calculateSalary(): number;
}

abstract class EmployeeBase {
  protected name: string;
  protected id: ID;
  protected address: Address;

  constructor(name: string, id: ID, address: Address) {
    this.name = name;
    this.id = id;
    this.address = address;
  }

  abstract calculateBonus(): number;

  getFullAddress(): string {
    return `${this.address.street}, ${this.address.city} - ${this.address.state}`;
  }
}

class RegularEmployee extends EmployeeBase implements Payable {
  private baseSalary: number;

  constructor(name: string, id: ID, address: Address, baseSalary: number) {
    super(name, id, address)
    this.baseSalary = baseSalary;
  }

  calculateSalary(): number {
    return this.baseSalary + this.calculateBonus();
  }

  calculateBonus(): number {
    return this.baseSalary * 0.05; // 5% de bônus
  }
}

class Freelancer extends EmployeeBase implements Payable {
  private hourlyRate: number;
  private hoursWorked: number;

  constructor(name: string, id: ID, address: Address, hourlyRate: number, hoursWorked: number) {
    super(name, id, address);
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }

  calculateSalary(): number {
    return (this.hourlyRate * this.hoursWorked) * 4;
  }

  calculateBonus(): number {
    return 0; // freelancers não recebem bônus fixo
  }

  getHourlyRate(): string {
    return this.hourlyRate.toFixed(2);
  }

  setHourlyRate(value: number): boolean {
    if (value > 100) {
      console.log('Valor máximo pago por hora é 100 reais');
      return false;
    }
    if (value <= 0) {
      console.log('Não é permitido valores negativos ou 0');
      return false
    }
    this.hourlyRate = value;
    return true
  }

  getHoursWorked(): number {
    return this.hoursWorked;
  }

  setHoursWorked(hours: number): boolean {
    if (hours > 44) {
      console.log('Horas semanais é até 44');
      return false
    }
    if (hours <=0 ) {
      console.log('Não é permitido valores negativos ou 0');
      return false
    }
    this.hoursWorked = hours;
    return true
  }
}

// AdminContractor não herda EmployeeBase
class AdminContractor implements Payable {
  private name: string;
  private fixedSalary: number;

  constructor(name: string, fixedSalary: number) {
    this.name = name;
    this.fixedSalary = fixedSalary;
  }

  calculateSalary(): number {
    return this.fixedSalary;
  }

  getName(): string {
    return this.name;
  }

  setSalary(newSalary: number): boolean {
    if (newSalary <= 0) {
      console.log('Salário inválido!');
      return false;
    }
    this.fixedSalary = newSalary;
    return true;
  }
}


const address: Address = {
  street: '123 Main St',
  city: 'São Paulo',
  state: 'SP',
  zipCode: '12345-678',
};

const emp1 = new RegularEmployee('João Silva', 1, address, 5000);
const emp2 = new Freelancer('Maria Souza', 2, address, 100, 80);

console.log(emp1.calculateSalary()); // 5000 + 500 = 5500
console.log(emp2.calculateSalary()); // 100 * 80 = 8000

const admin1 = new AdminContractor('Carlos Admin', 7000);

console.log(`Salário do Admin: R$ ${admin1.calculateSalary()}`);
