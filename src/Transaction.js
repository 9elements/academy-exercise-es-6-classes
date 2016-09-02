export default class Transaction {
  constructor(sender, receiver, amount, reference) {
    this.sender = sender;
    this.receiver = receiver;
    this.amount = amount;
    this.reference = reference;
  }
}
