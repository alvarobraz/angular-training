import { Component, OnInit } from '@angular/core';
import { TransactionSearchResponse } from 'src/app/model/types';
import { TransactionsService } from 'src/app/services/transactions.service';
import { calculateTotals, formatPrice } from 'src/app/utils/utils';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  public priceIncome!: string
  public priceOutCome!: string
  public priceResult!: string
  public query: string = ""

  constructor(private transactionsService: TransactionsService) {
    this.transactionsService.transactionSaved$.subscribe(() => {
      this.fetchTransactions(this.query);
    });

    this.transactionsService.transactionDeleted$.subscribe(() => {
      this.fetchTransactions(this.query);
    });

    this.transactionsService.transactionUpdated$.subscribe(() => {
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
          const { income, outcome } = calculateTotals(response.transactionSearch);

          this.priceIncome = formatPrice(income.toString());
          this.priceOutCome = formatPrice(outcome.toString());
          const result = income - outcome
          this.priceResult = formatPrice(result.toString());
        }
      }
    );
  }

}
