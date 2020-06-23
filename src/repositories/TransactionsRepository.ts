import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    const reducer = (accumulator: number, currentValue: number) =>
      accumulator + currentValue;
    const incomeValue =
      this.transactions.filter(transation => transation.type === 'income')
        .length === 0
        ? 0
        : this.transactions
            .filter(transation => transation.type === 'income')
            .map(transation => {
              return transation.value;
            })
            .reduce(reducer);

    const outcomeValue =
      this.transactions.filter(transation => transation.type === 'outcome')
        .length === 0
        ? 0
        : this.transactions
            .filter(transation => transation.type === 'outcome')
            .map(transation => {
              return transation.value;
            })
            .reduce(reducer);

    return {
      income: incomeValue,
      outcome: outcomeValue,
      total: incomeValue - outcomeValue,
    };
  }

  public create({ title, value, type }: Omit<Transaction, 'id'>): Transaction {
    // TODO
    const transaction = new Transaction({
      title,
      value,
      type,
    });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
