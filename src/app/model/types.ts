export interface TransactionSearch {
  _id?: string;
  description: string;
  price: number | string;
  category: string;
  type: 'income' | 'outcome';
  createdAt: Date
}

export interface TransactionSearchModal {
  transactionSearch: TransactionSearch;
}

export interface Transaction {
  limit: number | null;
  page: number | null;
  pages: number | null;
  total: number;
  transactionSearch: TransactionSearch[]
}
