import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Transaction, TransactionSearch } from 'src/app/model/types';
import { TransactionsService } from 'src/app/services/transactions.service';
import { formatTransactions } from 'src/app/utils/utils';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public transactionsSearch: TransactionSearch[] = [];
  public query = "";

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
      (response: Partial<Transaction>) => {
        if (response.transactionSearch) {
          this.transactionsSearch = formatTransactions(response.transactionSearch);
        }
      }
    );
  }

  public getSearch(value: string){
    this.fetchTransactions(value);
  }

  public getTransactionToUpdate(transaction: TransactionSearch): void {
    console.log(transaction);
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        transactionSearch: transaction
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal fechado', result);
    });
  }

  public deleteTransaction(transactionId: string): void {
    this.transactionsService.delete(transactionId);
  }

}
