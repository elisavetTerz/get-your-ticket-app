import { Routes } from '@angular/router';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { authGuard } from './shared/guards/auth.guard';
// import { TodayShowsComponent } from './today-shows/today-shows.component';
// import { ShowsComponent } from './shows/shows.component';
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
  // { path: '', redirectTo: '/today-shows', pathMatch: 'full' },
  // { path: 'today-shows', component: TodayShowsComponent },
  // { path: 'shows', component: ShowsComponent },
  // { path: 'cart', component: CartComponent },
  // { path: 'ticket-purchase', component: TicketPurchaseComponent }
];

