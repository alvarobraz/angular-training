import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { DescriptionRoutingModule } from '../description/description-routing.module';
import { HomeRoutingModule } from '../home/home-routing.module';



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
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    DescriptionRoutingModule
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
  ]
})
export class SharedModule { }
