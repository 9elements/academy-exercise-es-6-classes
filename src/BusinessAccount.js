import Account from './Account';
import Transaction from './Transaction';

export default class BusinessAccount extends Account {
  constructor(ledger, name) {
    super(ledger, name);
  }

  send(receiver, amount, reference) {
    this.ledger.addTransaction(new Transaction(this, receiver, amount, reference));
    this.ledger.addTransaction(new Transaction(this, this.ledger.bankAccount, 0.02, "Transaction Fee"));
  }
}
