import { Routes } from '@angular/router';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { authGuard } from './shared/guards/auth.guard';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';
import { EventTableComponent } from './components/event-table/event-table.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { BuyTicketComponent } from './components/buy-ticket/buy-ticket.component';
import { FindEventTemplateComponent } from './components/find-event-template/find-event-template.component';


export const routes: Routes = [
  {
    path: 'user-registration',
    component: UserRegistrationComponent,
  },
  {
    path: 'user-login',
    component: UserLoginComponent,
  },
  {
    path: 'user-page',
    component: UserPageComponent,
    canActivate: [authGuard],
  },
  { path: 'app-list-group-menu', component: ListGroupMenuComponent },
  {
    path: 'event-shows',
    component: EventTableComponent,
    // canActivate: [authGuard],
  },
  {
    path: 'buy-tickets',
    component: BuyTicketComponent,
  },
  {
    path: 'find-events',
    component: FindEventTemplateComponent,
  },
  
];

