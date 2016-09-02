# User Stories

- In a bank you have business accounts and private accounts.
- You can transfer money between accounts using transactions.
- For private accounts the transaction fee is 0.01 € for business accounts the transaction fee is 0.02 €.

# Tasks

- [x] write an `Account` class
  - [x] The class should hold a reference to the `ledger`
  - [x] It should also have a `name` to identify the account
- [x] implement a `Transaction` class
  - [x] A transaction consists of an optional `sender` (Type: Account)
  - [x] `receiver` (Type: Account)
  - [x] `amount` (Type: Number)
  - [x] `reference` (Type: String)
- [x] implement a `Ledger` class that keeps all transactions
  - [x] It should keep an array of `transactions`
  - [x] Have a member variable `bankAccount` the keeps a reference for the bank account
  - [x] Implement a function `addTransaction(transaction)`
  - [x] Implement a function `calculateAmountForAccount(account)` using `reduce`
  - [x] Implement a function `findTransactionsForAccount(account)` using `filter`
- [x] Add convenience functions to `Account`
  - [x] add a `send` function that generates two transactions
    - [x] The actual transaction
    - [x] A transaction for the fee for the bank
  - [x] add a getter to calculate the `amount`
  - [x] add a getter to retrieve all `transactions` that are related to the account
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
