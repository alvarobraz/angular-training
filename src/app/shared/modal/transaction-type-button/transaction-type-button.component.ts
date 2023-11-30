import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  public getDados(type: string) {
    if(type === 'outcome') {
      this.selectedType = 'outcome'
    }
    else {
      this.selectedType = 'income'
    }
    this.enviarDados.emit(this.selectedType)
  }

}
