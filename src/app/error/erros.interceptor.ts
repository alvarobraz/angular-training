import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { TransactionsService } from '../services/transactions.service';

@Injectable()
export class ErrosInterceptor implements HttpInterceptor {

  constructor(
    private transactionsService: TransactionsService,
  ) {}

  intercept(
    request: HttpRequest<HttpErrorResponse>,
    next: HttpHandler): Observable<HttpEvent<HttpErrorResponse>> {

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Ocorreu um erro desconhecido';

        if (error.error instanceof ErrorEvent) {
            // Erro do lado do cliente, como uma rede interrompida
            errorMessage = `Erro do cliente: ${error.error.message}`;
        } else if (error.status === 404) {
            // Recurso não encontrado (erro 404)
            errorMessage = 'Recurso não encontrado';
        } else if (error.status === 500) {
            // Erro interno do servidor (erro 500)
            errorMessage = 'Erro interno do servidor';
        } else if (error.status === 401) {
            // Não autorizado (erro 401)
            errorMessage = 'Você não está autorizado a acessar este recurso';
        }

        console.error( error);
        console.error(errorMessage);
        this.transactionsService.openSnackBar(errorMessage, 'red');

        return throwError (() => new Error('Ops, ocorreu um erro!'));
       })
    );
  }
}
