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

export function formatPrice(price: string): string {

  let numericPrice = 0

  if (price.startsWith("R$")) {
    numericPrice = parseFloat(price.replace(/\D/g, '')) / 100
  } else {
    numericPrice = parseFloat(price) / 100
  }

  return numericPrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

}

// export function otherFormatPrice(value: string): string {
//   console.log('otherFormatPrice => '+value)
//   const numericValue = parseFloat(value.replace(/\D/g, '')) / 100;

//   if (isNaN(numericValue)) {
//     return 'R$ 0,00';
//   }

//   return numericValue.toLocaleString('pt-BR', {
//     style: 'currency',
//     currency: 'BRL',
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2
//   });
// }

// export function formatPrice(value: string): string {
//   // Remove todos os caracteres não numéricos
//   const numericValue = parseFloat(value.replace(/\D/g, '')) / 100;

//   // Verifica se o valor é um número válido
//   if (isNaN(numericValue)) {
//     return 'R$ 0,00';
//   }

//   // Formata o valor numérico para uma string no formato de moeda brasileira
//   const formattedPrice = numericValue.toLocaleString('pt-BR', {
//     style: 'currency',
//     currency: 'BRL',
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2
//   });

//   return formattedPrice;
// }

export function extractNumericOfTheValue(value: string): string {
  return value.replace(/\D/g, '');
}

export function formatTransactions(transactions: TransactionSearch[]): TransactionSearch[] {
  return transactions.map(transaction => ({
    ...transaction,
    price: formatPrice(transaction.price.toString()),
  }));
}
