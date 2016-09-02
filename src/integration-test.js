import Ledger from './Ledger';
import Account from './Account';
import BusinessAccount from './BusinessAccount';
import Transaction from './Transaction';

describe('Accounts can send and receive money.', () => {
  let ledger,
     bankAccount,
     privateAccount,
     anotherPrivateAccount,
     companyAccount;

  beforeEach(function() {
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
  });

  it('A company can send a paycheck to a private account', () => {
    companyAccount.send(privateAccount, 100, "Paycheck");
    expect(privateAccount.amount).toEqual(200);
  });

  it('A company can send a paycheck to a private account and the transaction fees should be 0.02', () => {
    companyAccount.send(privateAccount, 100, "Paycheck");
    expect(bankAccount.amount).toEqual(1000000.02);
  });

  it('A private account can send money to a private account', () => {
    anotherPrivateAccount.send(privateAccount, 10, "Pizza");
    expect(privateAccount.amount).toEqual(110);
  });

  it('A private account can send money to a private account and the transaction fees should be 0.01', () => {
    anotherPrivateAccount.send(privateAccount, 100, "Paycheck");
    expect(bankAccount.amount).toEqual(1000000.01);
  });
});
