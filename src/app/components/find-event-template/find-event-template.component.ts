import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-find-event-template',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
  ],
  templateUrl: './find-event-template.component.html',
  styleUrl: './find-event-template.component.css'
})
export class FindEventTemplateComponent {
  @Output() searchEvents = new EventEmitter<{ searchType: string; searchValue: string }>();
  @Output() resetEvents = new EventEmitter<{}>();
  searchType: string = 'title';

  onSubmit(value: any) {
    const searchValue = this.searchType === 'title' ? value.title : this.formatDate(value.date);
    this.searchEvents.emit({ searchType: this.searchType, searchValue });
  }

  changeType(){
    this.resetEvents.emit();
  }

  private formatDate(date: Date): string {
    if (!date) {
      return '';
    }
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

}
