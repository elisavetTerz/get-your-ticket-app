import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventShowsComponent } from './event-shows.component';

describe('EventShowsComponent', () => {
  let component: EventShowsComponent;
  let fixture: ComponentFixture<EventShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventShowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
