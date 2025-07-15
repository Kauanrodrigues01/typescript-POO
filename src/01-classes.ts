/*
Classes em TypeScript - Moldes de Objetos

Uma classe é um molde (ou blueprint) para criar objetos que compartilham a mesma estrutura (atributos) e comportamentos (métodos).

No TypeScript (como em outras linguagens orientadas a objetos), classes permitem organizar melhor o código, modelar entidades do mundo real, e aplicar os pilares da POO.
*/

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const kauan = new Person('Kauan', 18);
kauan.greet(); // Hello, my name is Kauan and I am 18 years old.

/*
Componentes de uma classe:

- class: define a estrutura do objeto
- constructor: método especial chamado automaticamente ao instanciar
- this: referência à instância atual da classe
- atributos: propriedades (estado) da classe
- métodos: Comportamentos (funções) da classe
*/