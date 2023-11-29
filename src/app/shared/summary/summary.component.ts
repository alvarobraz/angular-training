import { Component, Input, OnInit } from '@angular/core';
import { TransactionSearch, TransactionSearchResponse } from 'src/app/model/types';
import { TransactionsService } from 'src/app/services/transactions.service';
import { priceFormatter } from 'src/app/utils/formatter';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  public priceIncome!: string
  public priceOutCome!: string
  public priceResult!: string

  constructor(
    private transactionsService: TransactionsService
  ) {}

  ngOnInit(): void {
    this.transactionsService.listTransaction().subscribe(
      (response: TransactionSearchResponse) => {
        if (response.transactionSearch) {
          // console.log('transactions === ' + JSON.stringify(response.transactionSearch));
          const { income, outcome } = response.transactionSearch.reduce(
            (acc, transaction) => {
              if (transaction.type === 'income') {
                acc.income += transaction.price;
              } else if (transaction.type === 'outcome') {
                acc.outcome += transaction.price;
              }
              return acc;
            },
            { income: 0, outcome: 0 }
          );

          this.priceIncome = priceFormatter.format(income);
          this.priceOutCome = priceFormatter.format(outcome);
          this.priceResult = priceFormatter.format(income - outcome);

          console.log(this.priceIncome);
        }
      }
    );
  }



}
