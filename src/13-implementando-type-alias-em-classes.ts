export {};

// Criando um alias de tipo para representar um endereço
type Address = {
  street: string;
  number: number;
  city: string;
  state: string;
  zipCode: string;
};

// Type alias para status do pedido
type OrderStatus = 'pending' | 'shipped' | 'delivered' | 'cancelled';

// Classe que usa os type aliases
class Customer {
  name: string;
  address: Address;

  constructor(name: string, address: Address) {
    this.name = name;
    this.address = address;
  }
}

class Order {
  orderId: number;
  customer: Customer;
  status: OrderStatus;

  constructor(orderId: number, customer: Customer, status: OrderStatus) {
    this.orderId = orderId;
    this.customer = customer;
    this.status = status;
  }

  // Método que mostra um resumo do pedido
  summary(): string {
    return `Order #${this.orderId} for ${this.customer.name} is currently ${this.status}`;
  }
}

// Criando instâncias
const customer1: Customer = new Customer("Kauan", {
  street: "Rua das Flores",
  number: 123,
  city: "Fortaleza",
  state: "CE",
  zipCode: "60000-000"
});

const order1: Order = new Order(1, customer1, "pending");

console.log(order1.summary());
