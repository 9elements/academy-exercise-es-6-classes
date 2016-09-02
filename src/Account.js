import Transaction from './Transaction';

export default class Account {
  constructor(ledger, name) {
    this.ledger = ledger;
    this.name = name;
  }

  send(receiver, amount, reference) {
    this.ledger.addTransaction(new Transaction(this, receiver, amount, reference));
    this.ledger.addTransaction(new Transaction(this, this.ledger.bankAccount, 0.01, "Transaction Fee"));
  }

  get amount() {
    return this.ledger.calculateAmountForAccount(this);
  }

  get transactions() {
    return this.ledger.findTransactionsForAccount(this);
  }

  toString() {
    return `${this.name} ${this.amount}`;
  }
}
