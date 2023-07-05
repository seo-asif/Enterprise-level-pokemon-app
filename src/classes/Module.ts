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

export class Invoice2 {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} ows ${this.amount} for ${this.details}`;
  }
}


const addUid =<NT> (obj: NT)=>{
    let uid = Math.floor(Math.random()*100)
    return {...obj,uid}
}

let docOne = addUid({name:"asif", age:40})


console.log(docOne.age)