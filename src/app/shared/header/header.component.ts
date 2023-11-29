import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  revealModal: boolean = false

  constructor(
    public dialog: MatDialog,
    private transactionsService: TransactionsService
  ) {}

  ngOnInit(): void {
    // this.transactionsService.listar().subscribe(
    //   resposta => {
    //     console.log(resposta)
    //   }
    // )
  }

  openModalTransaction() {
    this.dialog.open(ModalComponent);
  }

}
