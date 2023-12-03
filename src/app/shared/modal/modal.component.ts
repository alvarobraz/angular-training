import { Component, Input, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TransactionSearchModal } from 'src/app/model/types';
import { TransactionsService } from 'src/app/services/transactions.service';
import { extractNumericOfTheValue, formatPrice } from 'src/app/utils/utils';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() icon = ""
  @Input() title = ""

  public description = ""
  public price!: number
  public category = ""
  public selectedType =  ""
  public type =  ""

  public getDados!: "income" | "outcome"

  public loading!: boolean;
  public typeMethod: "save" | "update" = "save"

  public cadastroForm: FormGroup;

  public priceToNumber!: number | string;

  constructor(
    private transactionsService: TransactionsService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: TransactionSearchModal,
  ) {
    this.cadastroForm = this.formBuilder.group({
      id: [''],
      description: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      type: ['', Validators.required],
    });

    // Monitora as mudanças no campo de preço
    this.cadastroForm.get('price')?.valueChanges.subscribe(value => {
      // Atualiza o valor formatado no campo de preço
      this.cadastroForm.get('price')?.setValue(formatPrice(value), { emitEvent: false });
    });
  }

  ngOnInit(): void {
    if (this.data && this.data.transactionSearch) {
      const transaction = this.data.transactionSearch;

      this.cadastroForm.patchValue({
        id: transaction._id,
        description: transaction.description,
        price: transaction.price.toString().replace(/[^\d]/g, ''),
        category: transaction.category,
        type: transaction.type
      });

      this.typeMethod = "update";
      this.type = transaction.type;
      this.selectedType = transaction.type;
    }
  }

  public setDados(event: "income" | "outcome") {
    this.getDados = event;
    this.selectedType = event;
    this.cadastroForm.patchValue({ type: event });
  }

  saveNewTransaction() {

    this.priceToNumber = extractNumericOfTheValue(this.cadastroForm.get('price')?.value);
    console.log('priceToNumber =>'+this.priceToNumber)

    this.transactionsService.save(this.cadastroForm.value.description, this.getDados, this.cadastroForm.value.category, Number(this.priceToNumber))
    this.transactionsService.loading$.subscribe(
      (isLoading: boolean) => {
        this.loading = isLoading;
      }
    );
  }

  updateTransaction() {
    this.priceToNumber = extractNumericOfTheValue(this.cadastroForm.get('price')?.value);
    this.transactionsService.update(this.cadastroForm.value.id, this.cadastroForm.value.description, this.getDados, this.cadastroForm.value.category, Number(this.priceToNumber))
    this.transactionsService.loading$.subscribe(
      (isLoading: boolean) => {
        this.loading = isLoading;
      }
    );
  }

}
