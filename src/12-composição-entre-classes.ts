export {};

/*
O que é Composição?
Composição é um tipo forte de associação onde uma classe "tem" outra classe como parte essencial de sua estrutura.

O objeto “todo” controla a criação e o ciclo de vida do objeto “parte”.

Se o objeto “todo” for destruído, os objetos “parte” também são destruídos.

Representa uma relação forte e de dependência.

Exemplo no mundo real
Um Carro tem um Motor.

Se o Carro for destruído, o Motor não existe mais (na lógica da aplicação).

O motor não faz sentido sem o carro.
*/

class Engine {
  start(): void {
    console.log("Engine started");
  }
}

class Car {
  private engine: Engine;

  constructor() {
    this.engine = new Engine(); // Composição: Carro cria e controla o Motor
  }

  startCar(): void {
    this.engine.start();
  }
}

const car = new Car();
car.startCar(); // Engine started
/*
Por que isso é composição?
  - O Car cria o Engine no seu construtor.
  - Engine não é passado de fora, o Car tem o controle total.
  - Se o Car deixar de existir, o Engine também “deixa” (simulado pela lógica de programa).
*/