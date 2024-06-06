import { Routes } from '@angular/router';

import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
// import { TodayShowsComponent } from './today-shows/today-shows.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { ShowsComponent } from './shows/shows.component';
// import { CartComponent } from './cart/cart.component';
// import { TicketPurchaseComponent } from './ticket-purchase/ticket-purchase.component';

export const routes: Routes = [
  {
    path: 'user-registration',
    component: UserRegistrationComponent,
  },
  // { path: '', redirectTo: '/today-shows', pathMatch: 'full' },
  // { path: 'today-shows', component: TodayShowsComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'shows', component: ShowsComponent },
  // { path: 'cart', component: CartComponent },
  // { path: 'ticket-purchase', component: TicketPurchaseComponent }
];

