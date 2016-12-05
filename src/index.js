import Ledger from './Ledger';
import Account from './Account';
import BusinessAccount from './BusinessAccount';
import Transaction from './Transaction';

let ledger,
   bankAccount,
   privateAccount,
   anotherPrivateAccount,
   companyAccount;

ledger = new Ledger();

// setup bank account and wire to to the ledger (for transaction fees)
bankAccount = new Account(ledger, "Deutsche Bank");
ledger.addTransaction(new Transaction(null, bankAccount, 1000000, "Initial Amount"));
ledger.bankAccount = bankAccount;

// setup private account
privateAccount = new Account(ledger, "Sebastian Deutsch");
ledger.addTransaction(new Transaction(null, privateAccount, 100, "Initial Amount"));

// setup private account
anotherPrivateAccount = new Account(ledger, "Mathias Schäfer");
ledger.addTransaction(new Transaction(null, anotherPrivateAccount, 100, "Initial Amount"));

// setup company account
companyAccount = new BusinessAccount(ledger, "9elements GmbH");
ledger.addTransaction(new Transaction(null, companyAccount, 1000, "Initial Amount"));

companyAccount.send(privateAccount, 100, "Paycheck");
anotherPrivateAccount.send(privateAccount, 10, "Pizza");

console.log(bankAccount.toString());
console.log(privateAccount.toString());
console.log(anotherPrivateAccount.toString());
console.log(companyAccount.toString());

console.log(privateAccount.transactions);
