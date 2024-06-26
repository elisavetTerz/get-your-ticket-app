import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Credentials, LoggedInUser } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
})
export class UserLoginComponent {
  userService = inject(UserService);
  router = inject(Router);

  invalidLogin = false;

  form = new FormGroup({
    username: new FormControl('theohahiho', Validators.required),
    password: new FormControl('123456', Validators.required),
  });

  onSubmit() {
    const credentials = this.form.value as Credentials;
    this.userService.loginUser(credentials).subscribe({
      next: (response) => {
        const access_token = response.access_token;
        localStorage.setItem('access_token', access_token);
        const decodedTokenSubject = jwtDecode(access_token)
          .sub as unknown as LoggedInUser;

        this.userService.user.set({
          username: decodedTokenSubject as any,
          //email: decodedTokenSubject.email,
        });

        this.router.navigate(['user-page']);
      },
      error: (response) => {
        console.error('Login Error', response);
        this.invalidLogin = true;
      },
    });
  }
}