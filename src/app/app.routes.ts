import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
// import { UserLoginComponent } from './components/user-login/user-login.component';
// import { CrudDashboardComponent } from './components/crud/crud-dashboard/crud-dashboard.component';
// import { CrudCreateExampleComponent } from './components/crud/crud-create-example/crud-create-example.component';
// import { CrudDeleteExampleComponent } from './components/crud/crud-delete-example/crud-delete-example.component';
// import { CrudUpdateExampleComponent } from './components/crud/crud-update-example/crud-update-example.component';
// import { CrudReadeExampleComponent } from './components/crud/crud-reade-example/crud-reade-example.component';

export const routes: Routes = [
  {
    path: 'user-registration',
    component: UserRegistrationComponent,
  },
//   { path: 'user-login', component: UserLoginComponent },

//   {
//     path: 'restricted-content-example',
//     component: RestrictedContentExampleComponent,
//     canActivate: [authGuard],
//   },
//   { path: 'crud-example', component: CrudDashboardComponent, canActivate: [authGuard] },
//   { path: 'crud-example/create', component: CrudCreateExampleComponent, canActivate: [authGuard] },
//   { path: 'crud-example/read', component: CrudReadeExampleComponent, canActivate: [authGuard] },
//   { path: 'crud-example/update', component: CrudUpdateExampleComponent, canActivate: [authGuard] },
//   { path: 'crud-example/delete', component: CrudDeleteExampleComponent, canActivate: [authGuard] },
];
