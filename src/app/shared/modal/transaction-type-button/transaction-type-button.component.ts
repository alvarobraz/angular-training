import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-transaction-type-button',
  templateUrl: './transaction-type-button.component.html',
  styleUrls: ['./transaction-type-button.component.scss']
})
export class TransactionTypeButtonComponent implements OnInit, OnChanges {

  @Input() icon = "";
  @Input() title = "";
  @Input() variant = "";

  @Input() type = "";

  @Input() selectedType = '';

  @Output() public enviarDados = new EventEmitter();

  ngOnInit(): void {
    console.log(this.selectedType);
  }

  ngOnChanges(): void {
    console.log('ngOnChanges() => '+this.selectedType);
  }

  public getDados(type: string) {
    if(type === 'outcome') {
      this.type = 'outcome';
      this.selectedType = "";
      console.log('getDados() => '+this.type);
    }
    else {
      this.type = 'income';
      this.selectedType = "";
      // console.log('getDados() => '+this.type)
    }
    this.enviarDados.emit(this.type);
  }

}
