import { Component, Input, OnInit } from '@angular/core';

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

  public getDados: "income" | "outcome" | undefined

  constructor() { }

  ngOnInit(): void {
  }

  public setDados(event: "income" | "outcome") {
    this.getDados = event;
  }


  saveNewTransaction() {
    console.log(this.descricao+' - '+this.preco+' - '+this.categoria+' - '+this.getDados)
  }



}
