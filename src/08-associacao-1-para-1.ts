export {};

/*
O que é Associação?

Associação é um tipo de relacionamento entre classes. Uma classe usa ou depende de outra para realizar uma tarefa.

Exemplos do mundo real:
  - Um Aluno pertence a uma Turma.
  - Um Pedido possui vários Produtos.
  - Um Autor pode escrever vários Livros.

A associação pode ser:
  - Unidirecional: uma classe conhece a outra.
  - Bidirecional: ambas as classes se conhecem.
  - 1-para-1, 1-para-muitos, ou muitos-para-muitos.
*/

// Representa uma Turma
class ClassGroup {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// Representa um Aluno que está associado a uma Turma
class Student {
  name: string;
  classGroup: ClassGroup; // Associação 1:1 com a turma

  constructor(name: string, classGroup: ClassGroup) {
    this.name = name;
    this.classGroup = classGroup;
  }

  describe(): void {
    console.log(`${this.name} is in class ${this.classGroup.name}`);
  }
}

// Criando a turma
const mathClass = new ClassGroup("Math");

// Criando o aluno associado à turma
const student = new Student("Alice", mathClass);

// Exibindo os dados
student.describe(); // Alice is in class Math
