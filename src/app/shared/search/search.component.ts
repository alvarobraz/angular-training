import { Component } from '@angular/core';
import { TransactionSearch, TransactionSearchResponse } from 'src/app/model/types';
import { TransactionsService } from 'src/app/services/transactions.service';
import { formatTransactions } from 'src/app/utils/utils';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public transactionsSearch!: TransactionSearch[]
  public query: string = ""

  constructor(private transactionsService: TransactionsService) {
    this.transactionsService.transactionSaved$.subscribe(() => {
      this.fetchTransactions(this.query);
    });
  }

  ngOnInit(): void {
    this.fetchTransactions(this.query);
  }

  fetchTransactions(query: string): void {
    this.transactionsService.listTransaction(query).subscribe(
      (response: TransactionSearchResponse) => {
        if (response.transactionSearch) {
          this.transactionsSearch = formatTransactions(response.transactionSearch);
        }
      }
    );
  }

  public getSearch(value: string){
    this.fetchTransactions(value);
  }

}
