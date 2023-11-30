import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertsComponent } from '../shared/alerts/alerts.component';
import { MatDialog } from '@angular/material/dialog';

import { TransactionSearch, TransactionSearchResponse } from '../model/types';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private apiUrl: string = environment.apiUrl;

  public durationInSeconds: number = 2

  private loadingSubject = new Subject<boolean>();
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();

  private transactionSavedSubject = new Subject<void>();
  public transactionSaved$: Observable<void> = this.transactionSavedSubject.asObservable();

  public transactions!: TransactionSearch[]

  public query: string = "";

  constructor(
    private httpClient: HttpClient,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) {}

  openSnackBar() {
    this._snackBar.openFromComponent(AlertsComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  salvar(description: string, type: string, category: string, price: number) {
    this.loadingSubject.next(true);
    this.httpClient.post(`${this.apiUrl}transactions`, { description, type, category, price })
      .subscribe({
        next: () => {
          this.loadingSubject.next(false);
          this.dialog.closeAll();
          this.openSnackBar();
          this.transactionSavedSubject.next();
        },
        error: (err) => {
          console.log('Erro no post', err);
        }
      });
  }

  // listAllTransaction(): Observable<Transaction[]> {
  //   const sort =  'desc'
  //   return this.httpClient.get<any>(`${this.apiUrl}transactions/?sort=${sort}`);
  // }

  listTransaction(query: string): Observable<TransactionSearchResponse> {
    const sort =  'desc'
    // const name = "lu"
    const allTransaction =  this.httpClient.get<TransactionSearchResponse>(`${this.apiUrl}transactions/?name=${query}&sort=${sort}`);
    return allTransaction.pipe(
      tap( res => res ),
      tap( res => {
        this.transactions = res.transactionSearch
      })
    )
  }


}

