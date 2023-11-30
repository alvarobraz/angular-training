export interface TransactionSearch {
  description: string;
  price: number | string;
  category: string;
  type: 'income' | 'outcome';
  createdAt: Date
}


export interface TransactionSearchResponse {
  transactionSearch: TransactionSearch[];
}

export interface Transaction {
  limit: number | null;
  page: number | null;
  pages: number | null;
  total: number;
  transactionSearch: TransactionSearch[]
}
