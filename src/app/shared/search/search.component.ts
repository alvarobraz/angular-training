import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TransactionSearch, TransactionSearchResponse } from 'src/app/model/types';
import { TransactionsService } from 'src/app/services/transactions.service';
import { formatTransactions } from 'src/app/utils/utils';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public transactionsSearch: TransactionSearch[] = []
  public query: string = ""

  constructor(
    private transactionsService: TransactionsService,
    public dialog: MatDialog
  ) {
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
          this.transactionsSearch = formatTransactions(response.transactionSearch);
        }
      }
    );
  }

  public getSearch(value: string){
    this.fetchTransactions(value);
  }

  public getTransactionToUpdate(transaction: TransactionSearch): any {
    console.log(transaction)
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        transactionData: transaction
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal fechado', result);
    });
  }

  public deleteTransaction(transactionId: string): any {
    this.transactionsService.delete(transactionId)
  }

}
