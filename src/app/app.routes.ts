import { Routes } from '@angular/router';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

export const routes: Routes = [
    {
        path: 'app-user-register',
        component: UserRegisterComponent,
      },
      {
        path: 'app-user-login',
        component: UserLoginComponent,
      },
];
