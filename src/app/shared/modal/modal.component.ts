import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() icon: string = ""
  @Input() title: string = ""

  public descricao: string = ""
  public preco!: number
  public categoria: string = ""

  public getDados!: "income" | "outcome"

  public loading!: boolean;
  private loadingSubscription!: Subscription;


  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {}

  public setDados(event: "income" | "outcome") {
    this.getDados = event;
  }

  saveNewTransaction() {
    console.log(this.descricao+' - '+this.preco+' - '+this.categoria+' - '+this.getDados)
    this.transactionsService.salvar(this.descricao, this.getDados, this.categoria, this.preco)
    this.loadingSubscription = this.transactionsService.loading$.subscribe(
      (isLoading: boolean) => {
        this.loading = isLoading;
      }
    );
  }

}
