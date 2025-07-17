export {};

/*
Em POO, getters e setters são o métodos especiais usados para ler (get) e alterar (set) valores de propriedades privadas ou protegidas de uma classe - de forma controlada e segura

eles ajudam a:
  - encapsular os dados
  - proteger os atributos contra valores inválidos
  - permitir validações ou lógica extra ao acessar ou modificar valores
*/

class BankAccount {
  private _balance: number;

  constructor(initialBalance: number) {
    if (initialBalance < 0) {
      throw new Error('Initial balance cannot be negative.');
    }
    this._balance = initialBalance;
  }

  // Getter para obter o saldo
  public get balance(): number {
    return this._balance;
  }

  // Setter para atualizar o saldo (com validação)
  public set balance(amount: number) {
    if (amount < 0) {
      throw new Error('Balance cannot be negative.');
    }
    this._balance = amount;
  }

  public deposit(amount: number): void {
    if (amount <= 0) throw new Error('Deposit must be positive.');
    this._balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount > this._balance) throw new Error('Insufficient funds.');
    this._balance -= amount;
  }
}

const account = new BankAccount(1000);
console.log(account.balance); // usa o getter => 1000
account.deposit(500);
console.log(account.balance); // 1500
account.balance = 2000; // usa o setter
console.log(account.balance); // 2000
// account.balance = -100; // Erro! setter bloqueia valor negativo


// OUTRO EXEMPLO DE GETTER E SETTER
class Account {
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  public getBalance(): number {
    return this._balance
  }

  public setBalance(amount: number): void {
    if (amount < 0) {
      throw new Error('Balance cannot be negative');
    }
    this._balance = amount;
  }
}
const account2 = new Account(1000);
console.log(account2.getBalance()); // 1000
account2.setBalance(2000); // atualiza com método
console.log(account2.getBalance()); // 2000