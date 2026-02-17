// Task #1

enum DeliveryState {
  Created = "created",
  OnTheWay = "onTheWay",
  Delivered = "delivered",
  Cancelled = "cancelled",
}

let orderState = DeliveryState.Created;
orderState = DeliveryState.Delivered;
orderState = DeliveryState.Cancelled;

// Task #2

interface Order {
  id: number;
  title: string;
  price: number;
  state: DeliveryState;
}

const order: Order = {
  id: 1,
  title: "Electronics",
  price: 500,
  state: DeliveryState.Created,
};

// Task #3

function updateOrderState(order: Order, status: DeliveryState): Order {
  order.state = status;
  return order;
}

// Task #4

interface Box<T> {
  value: T;
  createdAt: Date;
}

interface User {
  id: number;
  name: string;
}

const firstBox: Box<string> = {
  value: "paper",
  createdAt: new Date(),
};

const secondBox: Box<number> = {
  value: 55,
  createdAt: new Date(),
};

const thirdBox: Box<User> = {
  value: { id: 1, name: "Eugene" },
  createdAt: new Date(),
};

// Task #5

function wrapInArray<T>(arg: T): [T] {
  return [arg];
}

// Task #6

function getItemID<T extends { id: number }>(object: T): number {
  return object.id;
}

// Task #7

function simulateRequest(): Promise<number> {
  return new Promise<number>(resolve => {
    setTimeout((): void => {
      resolve(Math.floor(Math.random() * 10));
    }, 1000);
  });
}

simulateRequest().then((result: number): void => {
  console.log(result);
});

// Task #8

async function loadStatistics(): Promise<number> {
  const first = await simulateRequest();
  const second = await simulateRequest();
  return first + second;
}

loadStatistics().then((result: number): void => console.log(result));

// Task #9

class Employee {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getInfo(): string {
    return `${this.name}'s salary is ${this.salary}.`;
  }
}

// Task #10

class Developer extends Employee {
  programmingLanguage: string;

  constructor(name: string, salary: number, programmingLanguage: string) {
    super(name, salary);
    this.programmingLanguage = programmingLanguage;
  }

  getInfo(): string {
    return `${this.name}'s salary is ${this.salary} as a ${this.programmingLanguage} developer.`;
  }
}

// Task #11

interface Payable {
  pay(amount: number): void;
}

class Worker implements Payable {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    ((this.name = name), (this.salary = salary));
  }

  pay(amount: number): void {
    if (amount <= this.salary) {
      console.log(`Payed ${this.name} ${amount}$.`);
    } else {
      console.log(
        `Payed ${this.name} ${this.salary}$ and ${amount - this.salary}$ bonus.`,
      );
    }
  }
}

const worker = new Worker("eugene", 500);
worker.pay(worker.salary);
const anotherWorker = new Worker("max", 200);
anotherWorker.pay(300);

// Task #12

abstract class Transport {
  abstract speed: number;
  abstract move(): void;
}

class Car extends Transport {
  speed: number = 120;

  move(): void {
    console.log(`The car is moving at speed ${this.speed}.`);
  }
}

class Bicycle extends Transport {
  speed: number = 20;

  move(): void {
    console.log(`The bicycle is moving at speed ${this.speed}.`);
  }
}

// Task #13

type ApiResult<T> = {
  data: T;
  success: boolean;
  timestamp: Date;
};

interface AnotherUser {
  id: number;
  name: string;
  email: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
}

function getResult<T>(arg: T | T[]): ApiResult<T | T[]> {
  return {
    data: arg,
    success: true,
    timestamp: new Date(),
  };
}

const user: AnotherUser = {
  id: 1,
  name: "Eugene",
  email: "eugene@gmail.com",
};
const userApiResult = getResult(user);

const products: Product[] = [
  { id: 1, title: "phone", price: 500 },
  { id: 2, title: "headphones", price: 200 },
];
const productsApiResult = getResult(products);
