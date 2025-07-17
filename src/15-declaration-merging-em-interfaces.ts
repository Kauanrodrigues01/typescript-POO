/*
O que é Declaration Merging?

Declaration Merging (ou junção de declarações) é um recurso do TypeScript que permite declarar múltiplas vezes a mesma interface com o mesmo nome, e o TypeScript automaticamente funde (merge) todas essas declarações em uma única definição.

Quando usar?
  - Ao extender comportamentos de interfaces sem precisar alterar o código original.
  - Ao trabalhar com bibliotecas (ex: sobrescrever tipos do Express, React etc.).
  - Para declarar tipos globais ou utilitários em etapas separadas.
*/

interface User {
  name: string;
}

// Em outro lugar do código...
interface User {
  age: number;
}

const user: User = {
  name: "Alice",
  age: 30,
};
