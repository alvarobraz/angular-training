import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  revealModal: boolean = false

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    // this.dialog.open(ModalComponent);
  }

  openModalTransaction() {
    this.dialog.open(ModalComponent);
  }

}
