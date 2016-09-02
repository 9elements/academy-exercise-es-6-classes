import Transaction from './Transaction';

export default class Account {
  constructor(ledger, name) {
    this.ledger = ledger;
    this.name = name;
  }

  toString() {
    return `${this.name}`;
  }
}
