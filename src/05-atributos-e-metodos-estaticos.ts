export {};

/*
O que são atributos e métodos static?
  - Atributos (static property) e métodos (static method) marcados com static pertencem à classe, e não a uma instância (objeto) da classe.
  - Você acessa eles diretamente pela classe, sem precisar criar um objeto com new.
*/

class MathUtils {
  // Atributo estático: pertence à classe, não à instância
  static PI: number = 3.14159;

  // Método estático: pode ser chamado sem instanciar a classe
  static sum(...numbers: number[]): number {
    return numbers.reduce((acc, val) => acc + val, 0);
  }

  // Outro exemplo de método estático: calcula a área de um círculo
  static circleArea(radius: number): number {
    return MathUtils.PI * radius * radius;
  }
}

// ✅ Acessando método estático direto pela classe (sem instanciar)
console.log(MathUtils.sum(1, 2, 3)); // Resultado: 6

// ✅ Acessando o atributo estático diretamente
console.log(MathUtils.PI); // Resultado: 3.14159

// ✅ Usando o atributo estático dentro de outro método estático
console.log(MathUtils.circleArea(5)); // Resultado: 78.53975
