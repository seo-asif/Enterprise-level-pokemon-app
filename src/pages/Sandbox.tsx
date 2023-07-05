import { Invoice2 } from "../classes/Module.js";

let greet: (a: string, b: string) => void;

greet = (name: string, adjective: string) => {
  console.log(`Hii my ${name} is ${adjective}`);
};

greet("dog", "good");

let mathFunction: (a: number, b: number) => number;

mathFunction = (num1: number, num2: number) => {
  return num1 + num2;
};

mathFunction(55, 90);

let logDetails: (obj: { name: string; age: number }) => void;
type person = { name: string; age: number };

logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} is years old`);
};

const anchor = document.querySelector("a");

// if (anchor) {
//   console.log(anchor.href);
// }
console.log(anchor?.href);

const age = document.querySelector("a")!;

if (age) {
  console.log(age.href);
}

const imageTag = document.querySelector(".hello ") as HTMLButtonElement;

class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(client: string, details: string, amount: number) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }

  format() {
    return `${this.client} ows ${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice2("Asif", "Job", 50);
const invTwo = new Invoice("Asif", "Work", 100);

let Invoices: Invoice2[] = [];

Invoices.push(invOne);


//Generics 

const addUid = (obj: object)=>{
    let uid = Math.floor(Math.random()*100)
    return {...obj,uid}
}

let docOne = addUid({name:"asif", age:40})