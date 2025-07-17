export {};

/*
O que é um construtor privado?

O construtor privado (private constructor) impede que outras classes ou códigos externos criem instâncias diretamente usando o new. Isso é útil quando:
  - Você quer controlar quantas instâncias da classe existem (como no padrão Singleton).
  - Você quer forçar o uso de métodos estáticos para criar instâncias (Factory Pattern, por exemplo.)
*/

/*
O que é o padrão Singleton?

O padrão Singleton garante que uma classe tenha apenas uma instância e fornece um acesso global a essa instância.

Exemplos práticos:
  - Classes de configuração.
  - Conexão com banco de dados.
  - Gerenciadores de cache.
*/


class Logger {
  // atributo estático que vai conter a única instãncia
  private static instance: Logger;

  // construtor privado para evitar que instancie fora da classe
  private constructor(private readonly prefix: string = 'LOG:') {} // utilizando private e readonly já cria automaticamente um atributo de instância, mesmo sem this.prefix

  // método estático para obter a instância única
  static getInstance() {
    if (Logger.instance) return Logger.instance;
    Logger.instance = new Logger();
    return Logger.instance;
  }

  // método de instância para mensagens de log
  public log(message: string): void {
    console.log(`${this.prefix} ${message}`);
  }
}

// ❌ Erro: constructor é privado
// const logger = new Logger(); // Não permitido

// ✅ Acessando a única instância via método estático
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

// Usando o logger
logger1.log("Application started...");
logger2.log("Another log message...");

// ✅ São a mesma instância
console.log(logger1 === logger2); // true