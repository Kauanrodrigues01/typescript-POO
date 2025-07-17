export {};

/*
Similaridades entre interface e type.
Ambos podem:
  - descrever formas de objetos.
  - ser extendidos ou cobinados
  - ser usados em parâmetros de função, atributos de classes, e etc...

Principais DIFERENÇAS:
  - interface pode ser implementada em classes e type alias não
  - a interface herda outra interface usando extends, o type alias só pode unir usando & (interseção)
  - interface pode ser redecladara (merged), type alias não
  - type alias pode definir novos tipos primitivos ex: `type ID = (string | number)
*/

// 1. Interface em classes
interface Person {
  name: string;
  age: number;
}

class User implements Person {
  constructor(public name: string, public age: number) {}
}


// 2. Type para tipos primitivos ou união
type ID = string | number;
type UserStatus = "active" | "inactive";


// 3. Diferença de extensão
// Interface permite extensão com "extends"
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}

// Type usa interseção (&)
type Cat = {
  name: string;
}
type PersianCat = Cat & {
  fluffiness: number;
}


// 4. Unificação de interfaces
interface Button {
  label: string;
}
interface Button {
  onClick: () => void;
}
// Isso é válido e Button agora tem os dois campos. (label e o método onClick), type não pode ser redeclarado e nem mesclar com essa redeclaração


/*
Quando user interface?
  - Quando tiver modelando objetos ou classes
  - Quando for usar implementação em classes

Quando user o type alias?
  - Quando precisar de tipos complexos (unions, tuplas e etc..)
  - Quando não precisa de extensibilidade futura
  - Quando for declarar alias simples
*/
