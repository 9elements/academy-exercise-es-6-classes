# User Stories

- In a bank you have business accounts and private accounts.
- You can transfer money between accounts using transactions.
- For private accounts the transaction fee is 0.01 € for business accounts the transaction fee is 0.02 €.

# Tasks

- [ ] write an `Account` class
  - [ ] The class should hold a reference to the `ledger`
  - [ ] It should also have a `name` to identify the account
- [ ] implement a `Transaction` class
  - [ ] A transaction consists of an optional `sender` (Type: Account)
  - [ ] `receiver` (Type: Account)
  - [ ] `amount` (Type: Number)
  - [ ] `reference` (Type: String)
- [ ] implement a `Ledger` class that keeps all transactions
  - [ ] It should keep an array of `transactions`
  - [ ] Have a member variable `bankAccount` the keeps a reference for the bank account
  - [ ] Implement a function `addTransaction(transaction)`
  - [ ] Implement a function `calculateAmountForAccount(account)` using `reduce`
  - [ ] Implement a function `findTransactionsForAccount(account)` using `filter`
- [ ] Add convenience functions to `Account`
  - [ ] add a `send` function that generates two transactions
    - [ ] The actual transaction
    - [ ] A transaction for the fee for the bank
  - [ ] add a getter to calculate the `amount`
  - [ ] add a getter to retrieve all `transactions` that are related to the account
- [ ] specialize `Account` class into a `BusinessAccount`
  - [ ] override the `send` function to respect different transaction fees for businesses

# Help

You can see the tests in `integration-test`. Try to run write the classes so they are satisfying the tests. You can also follow the commits in the `solution` branch to see the solution.

# Commands

```
npm install # install all dependencies
npm test # runs all tests
npm start # starts a dev server on localhost:8000
```
