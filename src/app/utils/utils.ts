import { TransactionSearch } from "../model/types";

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function calculateTotals(transactions: TransactionSearch[]): { income: number; outcome: number } {
  return transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += Number(transaction.price);
      } else if (transaction.type === 'outcome') {
        acc.outcome += Number(transaction.price);
      }
      return acc;
    },
    { income: 0, outcome: 0 }
  );
}
