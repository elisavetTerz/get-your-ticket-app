import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CustomEvent } from 'src/app/shared/interfaces/event';
import { sortBy } from 'lodash-es';
import { EventService } from 'src/app/shared/services/event.service';
import { BuyTicketDialogComponent } from '../buy-ticket-dialog/buy-ticket-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-event-table',
  standalone: true,
  imports: [BuyTicketDialogComponent, MatFormFieldModule,],
  templateUrl: './event-table.component.html',
  styleUrl: './event-table.component.css'
})
export class EventTableComponent implements OnInit {
  currentIndex = -1;
  title: string = '';
  date: string = '';
  
  @Input() events: CustomEvent[] = [];
  @Output() eventClicked = new EventEmitter<CustomEvent>();
  @Output() addToTicket = new EventEmitter<CustomEvent>();
  
  constructor(private eventService: EventService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  sortOrder = {
    title: 'none',
    date: 'none',
    startTime: 'none',
    availableSeats: 'none',
  };

  sortData(sortKey: keyof CustomEvent) {
    if (this.sortOrder[sortKey] === 'asc') {
      this.sortOrder[sortKey] = 'desc';
      this.events = sortBy(this.events, sortKey).reverse();
    } else {
      this.sortOrder[sortKey] = 'asc';
      this.events = sortBy(this.events, sortKey);
    }

    for (let key in this.sortOrder) {
      if (key !== sortKey) {
        this.sortOrder[key] = 'none';
      }
    }
  }

  sortSign(sortKey: string) {
    if (this.sortOrder[sortKey] === 'asc') {
      return '↑';
    } else if (this.sortOrder[sortKey] === 'desc') {
      return '↓';
    } else {
      return '';
    }
  }

  onRowClick(event: CustomEvent): void {
    this.eventClicked.emit(event);
    this.openDialog(event);
  }

  openDialog(event: CustomEvent): void {
    const dialogRef = this.dialog.open(BuyTicketDialogComponent, {
      width: '250px',
      data: event
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onAddToTicket(eventClicked: CustomEvent): void {
    this.addToTicket.emit(eventClicked);
  }
}
