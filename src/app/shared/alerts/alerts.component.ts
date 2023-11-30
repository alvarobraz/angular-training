import { Component, Inject, Input } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {

  @Input() title!: string;

  constructor(
    private snackBarRef: MatSnackBarRef<AlertsComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {
    if (data && data.title) {
      this.title = data.title;
    }
  }

  // snackBarRef = inject(MatSnackBarRef);

  close() {
    this.snackBarRef.dismiss();
  }
}
