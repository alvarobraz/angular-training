import { Component, Input, OnInit } from '@angular/core';
import { TransactionSearchResponse } from 'src/app/model/types';
import { TransactionsService } from 'src/app/services/transactions.service';
import { calculateTotals, priceFormatter } from 'src/app/utils/utils';

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
          const { income, outcome } = calculateTotals(response.transactionSearch);

          this.priceIncome = priceFormatter.format(income);
          this.priceOutCome = priceFormatter.format(outcome);
          this.priceResult = priceFormatter.format(income - outcome);
        }
      }
    );
  }

}
