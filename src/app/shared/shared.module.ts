import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from '../pages/description/description.component';
import { AlertsComponent } from './alerts/alerts.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { TransactionTypeButtonComponent } from './modal/transaction-type-button/transaction-type-button.component';
import { SearchFormComponent } from './search/search-form/search-form.component';
import { SearchComponent } from './search/search.component';
import { SummaryCardComponent } from './summary/summary-card/summary-card.component';
import { SummaryComponent } from './summary/summary.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    ModalComponent,
    TransactionTypeButtonComponent,
    AlertsComponent,
    SummaryComponent,
    SummaryCardComponent,
    SearchFormComponent,
    SearchComponent,
    DescriptionComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    ModalComponent,
    TransactionTypeButtonComponent,
    AlertsComponent,
    SummaryComponent,
    SummaryCardComponent,
    SearchFormComponent,
    SearchComponent,
    DescriptionComponent,
  ]
})
export class SharedModule { }
