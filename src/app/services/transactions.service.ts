import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertsComponent } from '../shared/alerts/alerts.component';
import { MatDialog } from '@angular/material/dialog';

import { Transaction, TransactionSearch } from '../model/types';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private apiUrl: string = environment.apiUrl;

  public durationInSeconds: number = 1

  private loadingSubject = new Subject<boolean>();
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();

  private transactionSavedSubject = new Subject<void>();
  public transactionSaved$: Observable<void> = this.transactionSavedSubject.asObservable();

  private transactionUpdatedSubject = new Subject<void>();
  public transactionUpdated$: Observable<void> = this.transactionUpdatedSubject.asObservable();

  private transactionDeletedSubject = new Subject<void>();
  public transactionDeleted$: Observable<void> = this.transactionDeletedSubject.asObservable();

  public transactions!: TransactionSearch[]

  public query: string = "";

  constructor(
    private httpClient: HttpClient,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) {}

  openSnackBar(title: string, colorBox: string) {
    this._snackBar.openFromComponent(AlertsComponent, {
      duration: this.durationInSeconds * 1000,
      data: { title, colorBox }
    });
  }

  save(description: string, type: string, category: string, price: number) {
    this.loadingSubject.next(true);
    this.httpClient.post(`${this.apiUrl}transactions`, { description, type, category, price })
      .subscribe({
        next: () => {
          this.loadingSubject.next(false);
          this.dialog.closeAll();
          this.openSnackBar('Transação postada com sucesso!', 'green');
          this.transactionSavedSubject.next();
        },
        error: (err) => {
          console.log('Erro no post', err);
          this.openSnackBar(err.error.error, 'red');
        }
      });
  }

  update(transactionId: string, description: string, type: string, category: string, price: number) {
    this.loadingSubject.next(true);

    const updateData = {
      description,
      type,
      category,
      price
    };

    this.httpClient.put(`${this.apiUrl}transactions/${transactionId}`, updateData)
      .subscribe({
        next: () => {
          this.loadingSubject.next(false);
          this.dialog.closeAll();
          this.openSnackBar('Transação atualizada com sucesso!', 'green');
          this.transactionUpdatedSubject.next();
        },
        error: (err) => {
          console.log('Erro na atualização', err.error.error);
          this.openSnackBar(err.error.error, 'red');
        }
      });
  }

  delete(transactionId: string) {
    this.loadingSubject.next(true);
    this.httpClient.delete(`${this.apiUrl}transactions/${transactionId}`)
      .subscribe({
        next: () => {
          this.loadingSubject.next(false);
          this.dialog.closeAll();
          this.openSnackBar('Transação deletada com sucesso!', 'green');
          this.transactionDeletedSubject.next();
        },
        error: (err) => {
          console.log('Error deleting transaction', err);
          this.openSnackBar(err.error.error, 'red');
        }
      });
  }

  listTransaction(query: string): Observable<Partial<Transaction>> {
    const sort =  'desc'
    const allTransaction =  this.httpClient.get<Partial<Transaction>>(`${this.apiUrl}transactions/?name=${query}&sort=${sort}`);
    return allTransaction.pipe(
      tap( res => res ),
      tap( res => {
        this.transactions = res.transactionSearch!
        console.log(this.transactions)
      })
    )
  }


}

