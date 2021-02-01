class MoneyExchanger {
  #amount: number;
  rate: number = 6.16;

  constructor(theAmount: number) {
    this.#amount = theAmount;
  }

  public getAmountAfterExchange() {
    return (this.#amount * this.rate).toFixed(2);
  }

  public getReceipt() {
    return `Exchanged ${this.#amount}$ into ` + this.getAmountAfterExchange() + ` DKK.`;
  }
}

class RiggedExchanger extends MoneyExchanger {
  constructor(theAmount: number, theRate: number) {
    super(theAmount)
    this.rate = theRate
  }
}

const moneyExchanger: MoneyExchanger = new MoneyExchanger(10);
const riggedExchanger: RiggedExchanger = new RiggedExchanger(10, 5.9);
console.log(moneyExchanger.getReceipt());
console.log(riggedExchanger.getReceipt());