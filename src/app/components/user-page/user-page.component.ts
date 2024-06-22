import { Component, Input, inject } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { BuyTicketComponent } from 'src/app/components/buy-ticket/buy-ticket.component';
import { FindEventTemplateComponent } from "../find-event-template/find-event-template.component";
import { EventService } from 'src/app/shared/services/event.service';
import { EventTableComponent } from "../event-table/event-table.component";
import { CustomEvent } from 'src/app/shared/interfaces/event';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-user-page',
    standalone: true,
    templateUrl: './user-page.component.html',
    styleUrl: './user-page.component.css',
    imports: [
        BuyTicketComponent,
        FindEventTemplateComponent,
        EventTableComponent,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
    ]
})
export class UserPageComponent {
  userService = inject(UserService);
  user = this.userService.user;
  events: CustomEvent[] = [];
  eventsFound: CustomEvent[] = [];
  selectedAction: string = '';
  selectedEvent?: CustomEvent;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.fetchEvents();
  }

  private fetchEvents(): void {
    this.eventService.getAllEvents().subscribe({
      next: (response: any) => {
        this.events = response
        console.log(this.events);
      }, 
      error: (err) => {
        console.error('Error fetching events:', err);
      }
    });
  }

  resetEvents(){
    this.eventsFound = [];
  }

  handleSearch(searchCriteria: { searchType: string; searchValue: string }): void {
    this.resetEvents();
    if (searchCriteria.searchType === 'title') {
      this.eventService.getEventsByTitle(searchCriteria.searchValue).subscribe({
        next: (response: CustomEvent[]) => {
          this.eventsFound = response;
          console.log('Error fetching events by title:', this.eventsFound);
        },
        error: (err) => {
          console.error('Error fetching events by title:', err);
        }
      });
    } else if (searchCriteria.searchType === 'date') {
      this.eventService.getEventsByDate(searchCriteria.searchValue).subscribe({
        next: (response: CustomEvent[]) => {
          this.eventsFound = response;
          console.log('Events found by date:', this.eventsFound);
        },
        error: (err) => {
          console.error('Error fetching events by date:', err);
        }
      });
    }
  }

  onRowClick(event: CustomEvent): void {
    console.log('Event clicked: ', event);
  }

  addToTicket(event: CustomEvent): void {
    console.log('Add to ticket: ', event);
  }

  closeEventDetails(): void {
    this.selectedEvent = undefined;
  }
}