# 📘 Os 4 Pilares da Programação Orientada a Objetos (POO)

A **Programação Orientada a Objetos (POO)** é um paradigma que organiza o código em **objetos** com **estado (dados)** e **comportamento (métodos)**.

Esse modelo é amplamente usado em linguagens como TypeScript, Java, Python, C++, entre outras, e tem como base quatro pilares fundamentais.

---

## 🧱 Os 4 Pilares da POO

### 1. 🔹 Abstração

> **"Esconde a complexidade e mostra apenas o necessário."**

A abstração permite representar entidades do mundo real de forma simplificada no código. **Oculta os detalhes internos** e **expõe apenas as funcionalidades essenciais**.

✅ **Exemplo:**  
Você pode usar um `carro.ligar()` sem precisar saber como o motor funciona por dentro.

---

### 2. 🔒 Encapsulamento

> **"Protege os dados internos de um objeto e controla seu acesso."**

Com encapsulamento, os atributos de um objeto ficam protegidos e **só podem ser acessados ou modificados por métodos específicos da própria classe**. Isso garante integridade e segurança dos dados.

✅ **Exemplo:**  
Você não acessa diretamente o saldo de uma conta bancária (`conta.saldo`), mas sim por métodos como `conta.getSaldo()` ou `conta.depositar()`.

---

### 3. 🧬 Herança

> **"Permite que uma classe herde propriedades e comportamentos de outra."**

A herança facilita a **reutilização de código**, evitando duplicação. Uma classe `Filha` pode **herdar atributos e métodos** de uma classe `Pai`.

✅ **Exemplo:**  
Uma classe `Cachorro` pode herdar de `Animal` e reutilizar os métodos `comer()` e `dormir()` definidos na superclasse.

---

### 4. 🔁 Polimorfismo

> **"Permite que métodos com o mesmo nome se comportem de formas diferentes."**

O polimorfismo torna o sistema mais flexível e dinâmico, permitindo que **métodos sejam sobrescritos** em subclasses ou que **um mesmo método funcione com diferentes tipos de dados**.

✅ **Exemplo:**  
Um método `falar()` pode gerar sons diferentes em classes `Cachorro`, `Gato`, `Vaca` — mesmo nome, **comportamentos diferentes**.

---

## ✅ Resumo

| Pilar          | Objetivo                                                        |
|----------------|-----------------------------------------------------------------|
| **Abstração**     | Mostrar apenas o essencial, esconder a complexidade interna     |
| **Encapsulamento** | Proteger e controlar o acesso aos dados do objeto              |
| **Herança**       | Reutilizar código entre classes, reduzir duplicidade           |
| **Polimorfismo**  | Permitir múltiplas implementações para um mesmo método         |

---

📌 **Aplicar esses pilares juntos torna seu código mais reutilizável, modular, seguro e fácil de manter.**

