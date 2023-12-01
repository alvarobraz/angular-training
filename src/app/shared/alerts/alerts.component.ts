import { Component, Inject, Input } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {

  @Input() title!: string;
  @Input() colorBox!: string;

  constructor(
    private snackBarRef: MatSnackBarRef<AlertsComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: { title: string, colorBox: string }
  ) {
    console.log(data)
    if (data && data.title) {
      this.title = data.title;
    }
    if (data && data.colorBox) {
      this.colorBox = data.colorBox;
    }
  }

  close() {
    this.snackBarRef.dismiss();
  }
}
