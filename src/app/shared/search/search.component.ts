import { Component } from '@angular/core';
import { Transaction, TransactionSearch, TransactionSearchResponse } from 'src/app/model/types';
import { TransactionsService } from 'src/app/services/transactions.service';
import { priceFormatter } from 'src/app/utils/utils';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
priceFormatter(arg0: number) {
throw new Error('Method not implemented.');
}

  public transactionsSearch!: TransactionSearch[]


  constructor(
    private transactionsService: TransactionsService
  ) {}

  ngOnInit(): void {
    this.transactionsService.listTransaction().subscribe(
      (response: TransactionSearchResponse) => {
        if (response.transactionSearch) {
          this.transactionsSearch = response.transactionSearch.map(transaction => ({
            ...transaction,
            price: priceFormatter.format(Number(transaction.price)),
          }));
        }
      }
    );
  }

}
