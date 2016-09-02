export default class Ledger {
  constructor() {
    this.transactions = [];
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  calculateAmountForAccount(account) {
    return this.transactions.reduce((amount, transaction) => {
      if(transaction.sender == account) {
        amount -= transaction.amount;
      }
      if(transaction.receiver == account) {
        amount += transaction.amount;
      }
      return amount;
    }, 0);
  }

  findTransactionsForAccount(account) {
    return this.transactions.filter( transaction => {
      if(transaction.sender == account || transaction.receiver == account) {
        return true;
      } else {
        return false;
      }
    });
  }
}
