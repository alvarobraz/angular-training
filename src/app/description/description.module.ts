import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { DescriptionComponent } from './description.component';
import { DescriptionRoutingModule } from './description-routing.module';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    DescriptionComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    MatIconModule,
    DescriptionRoutingModule
  ],
  exports: [
    DescriptionComponent,
  ]
})
export class DescriptionModule { }
