import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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

  public description: string = ""
  public price!: number
  public category: string = ""

  public getDados!: "income" | "outcome"

  public loading!: boolean;

  constructor(
    private transactionsService: TransactionsService,
    private formBuilder: FormBuilder
  ) {}

  public cadastroForm: FormGroup = this.formBuilder.group({
    description: ['', Validators.required],
    price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    category: ['', Validators.required],
    type: ['', Validators.required],
  })

  ngOnInit(): void {}

  public setDados(event: "income" | "outcome") {
    this.getDados = event;
    this.cadastroForm.patchValue({ type: event });
  }

  saveNewTransaction() {
    this.transactionsService.save(this.cadastroForm.value.description, this.getDados, this.cadastroForm.value.category, this.cadastroForm.value.price)
    this.transactionsService.loading$.subscribe(
      (isLoading: boolean) => {
        this.loading = isLoading;
      }
    );
  }

}
