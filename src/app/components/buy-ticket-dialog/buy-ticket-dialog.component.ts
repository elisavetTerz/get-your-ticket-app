import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { CustomEvent } from 'src/app/shared/interfaces/event';

@Component({
  selector: 'app-buy-ticket-dialog',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './buy-ticket-dialog.component.html',
  styleUrl: './buy-ticket-dialog.component.css'
})
export class BuyTicketDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<BuyTicketDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomEvent
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onBuyClick(): void {
    // Handle buy ticket logic here
    console.log('Event added to tickets:', this.data);
    this.dialogRef.close();
  }
}
