import { Routes } from '@angular/router';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { authGuard } from './shared/guards/auth.guard';
import { AllEventsComponent } from './components/all-events/all-events.component';
// import { CartComponent } from './cart/cart.component';
// import { TicketPurchaseComponent } from './ticket-purchase/ticket-purchase.component';

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
  { path: '', redirectTo: '/popular-events', pathMatch: 'full' },
  { path: 'events', component: AllEventsComponent },
  // { path: 'cart', component: CartComponent },
  // { path: 'ticket-purchase', component: TicketPurchaseComponent }
];

