import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertsComponent } from '../shared/alerts/alerts.component';
import { MatDialog } from '@angular/material/dialog';

import { Transaction, TransactionSearch, TransactionSearchResponse } from '../model/types';


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private apiUrl: string = environment.apiUrl;
  emitEvent: any;

  public durationInSeconds: number = 2

  public loading: boolean = true

  private loadingSubject = new Subject<boolean>();
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();

  public transactions!: TransactionSearch[]

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
      next: (value) => {
        this.loadingSubject.next(false);
        this.dialog.closeAll()
        this.openSnackBar()
      },
      error: (err) => {
        console.log('Erro no post', err)
      }
    })

  }

  listAllTransaction(): Observable<Transaction[]> {
    const sort =  'desc'
    return this.httpClient.get<any>(`${this.apiUrl}transactions/?sort=${sort}`);
  }

  listTransaction(): Observable<TransactionSearchResponse> {
    const sort =  'desc'
    const allTransaction =  this.httpClient.get<TransactionSearchResponse>(`${this.apiUrl}transactions/?sort=${sort}`);
    return allTransaction.pipe(
      tap( res => res ),
      tap( res => {
        this.transactions = res.transactionSearch
      })
    )
  }


}

