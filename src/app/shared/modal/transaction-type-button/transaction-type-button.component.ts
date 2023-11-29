import { Component, EventEmitter, Input, Output } from '@angular/core';

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}


@Component({
  selector: 'transaction-type-button',
  templateUrl: './transaction-type-button.component.html',
  styleUrls: ['./transaction-type-button.component.scss']
})
export class TransactionTypeButtonComponent {

  @Input() icon: string = ""
  @Input() title: string = ""
  @Input() variant: string = ""

  public selectedType: string = ''

  @Output() public enviarDados = new EventEmitter()

  // tipo(type: string) {
  //   alert(type)
  //   if(type === 'outcome') {
  //     this.selectedType = 'outcome'
  //   }
  //   else {
  //     this.selectedType = 'income'
  //   }
  // }

  public getDados(type: string) {
    console.log(this.selectedType)
    if(type === 'outcome') {
      this.selectedType = 'outcome'
    }
    else {
      this.selectedType = 'income'
    }
    this.enviarDados.emit(this.selectedType)
  }

}
