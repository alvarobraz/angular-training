// export interface TransactionSearch {
//   transactionSearch: {
//     description: string;
//     price: number;
//     category: string;
//     type: 'income' | 'outcome';
//   }
// }[]
export interface TransactionSearch {
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';
}

// ...

export interface TransactionSearchResponse {
  transactionSearch: TransactionSearch[];
}

export interface Transaction {
  limit: number;
  page: number;
  pages: number;
  total: number;
  transactionSearch: TransactionSearch[]
}
